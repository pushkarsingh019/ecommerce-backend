import express from "express";
import cors from "cors"
import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken"

const app = express();
const PORT = process.env.PORT || 8080

// importing data to send
import { categories } from "./db/categories.js";
import { products } from "./db/products.js";
import { users } from "./db/user.js";

// importing utils
import authenticateToken from "./utils/authenticateToken.js";
import { ACCESS_SECRET } from "./utils/secret.js";
import orders from "./db/orders.js";

// middleware
app.use(express.json());
app.use(cors());


// routes
app.get('/', (req, res) => {
    res.send("API is up and running")
})

// product routes
app.get(`/api/products`, (req, res) => {
    res.status(200).send(products)
});

app.get(`/api/product/:productId`, (req, res) => {
    const {productId} = req.params;
    const product = products.find(product => product._id == productId);
    if(product == undefined){
        res.status(404).send("product not found")
    }
    res.status(200).send(product);
})

// category routes
app.get(`/api/categories`, (req, res) => {
    res.status(200).send(categories);
});

app.get(`/api/category/:categoryId`, (req, res) => {
    const {categoryId} = req.params;
    const category = categories.find(category => category._id == categoryId);
    if(category === undefined){
        res.status(404).send("No category with this category id");
    }
    res.status(200).send(category);
});

// cart routes
app.route('/api/user/cart', authenticateToken)
.get((req, res) => {
    const {userId} = req.user;
    const cart = users.find(user => user._id === userId).cart;
    console.log(cart);
    res.status(200).send(cart);
})
.post((req, res) => {
    const {userId} = req.user;
    const {productId} = req.body;
    users.find(user => user._id === userId).cart = [...{productId, quantity : 1}];
    const cart = users.find(user => user._id === userId).cart;
    res.status(200).send(cart);
});

app.route(`/api/user/cart/:productId`, authenticateToken)
.delete((req, res) => {
    const {productId} = req.params;
    const {userId} = req.id;
    users.find(user => user._id === userId).cart = users.find(user => user._id === userId).cart.filter(product => product.productId !== productId);
    const cart = users.find(user => user._id === userId);
    res.status(200).send(cart);
})
.post((req, res) => {
    const {action} = req.body;
    const {productId} = req.params;
    const {userId} = req.user;
    users.find(user => user._id === userId).cart.find(product => product.productId === productId).quantity += 1;
    const cart = users.find(user => user._id === userId);
    res.status(200).send(cart);
})

// authentication and authorisation routes
app.post(`/api/auth/signup`, (req, res) => {
    const {name, email, password} = req.body;
    const newUser = {
        _id : uuid(),
        name,
        email,
        password, 
        cart : [],
        wishlist : [],
        address : [],
        orders : [],
    };
    // TODO: add existing user function later.
    users.push(newUser);
    const accessToken = jwt.sign(newUser, ACCESS_SECRET);
    res.status(200).json({user : newUser, token : accessToken})
});

app.post(`/api/auth/login`, (req, res) => {
        const {email, password} = req.body;
        const userExists = users.find(user => user.email === email) ? true : false;
        if(userExists){
            const user = users.find(user => user.email === email);
            if(user.password === password){
                const access_token = jwt.sign(user, ACCESS_SECRET);
                res.status(200).json({user, access_token, message : "Logged In..", status : 200})
            }
            else{
                res.status(200).json({message : `wrong password for the ${user.email}`, status : 401})
            }
        }
        if (userExists === false){
            res.status(200).json({message : `user does not exist, sign up`, status : 404}, )
        } 
});

// updating user routes
app.post(`/api/user/address`, authenticateToken, (req, res) => {
    const {addressDetails} = req.body;
    const requestedUser = req.user;
    const userId = requestedUser._id;
    const user = users.find(user => user._id === userId);
    const userAddress = user.address.find(address => address.default === true);
    if(user.address.length === 0){
        const newAddress = {id : uuid(), address : addressDetails.address, contactNumber : addressDetails.contactNumber, default : true};
        user.address = [...user.address, newAddress];
        res.status(200).send(user)
    }
    else{
        if(userAddress){
            if(addressDetails.default === true){
                userAddress.default = false;
            }
            const newAddress = {id : uuid(), address : addressDetails.address, contactNumber : addressDetails.contactNumber, default : addressDetails.default};
            user.address = [...user.address, newAddress];
            res.status(200).send(user);
        }
        else{
            const newAddress = {id : uuid(), address : addressDetails.address, contactNumber : addressDetails.contactNumber, default : addressDetails.default};
            user.address = [...user.address, newAddress];
            res.status(200).send(user);
        }
    }
});

app.delete(`/api/user/address/:addressId`, authenticateToken,  (req, res) => {
    // TODO: getting address id and user id, then updating address and sending the updated user back.
    const user = req.user;
    const {addressId} = req.params
    const currentUser = users.find(u => u._id === user._id);
    currentUser.address =  currentUser.address.filter(address => address.id !== addressId);
    res.status(200).send(currentUser);
});

app.put(`/api/user/address`, authenticateToken, (req, res) => {
    const requestUser = req.user;
    const { addressDetails } = req.body;
    const user = users.find(user => user._id === requestUser._id);
    
    const addressIndex = user.address.findIndex(address => address.id === addressDetails.id);
    if (addressIndex !== -1) {
      user.address[addressIndex] = { ...addressDetails };
      res.status(200).send(user);
    } else {
      res.status(404).send("Address not found");
    }
});


// order related routes

app.post(`/api/order`, authenticateToken, (req, res) => {
    const {products, shippingAddress, totalCost} = req.body;
    const currentUser = req.user;
    const orderDetails = {
        _id : uuid(),
        userId : currentUser._id,
        products : products,
        shippingAddress : shippingAddress,
        date : Date.now(),
        totalCost : totalCost,
        isPaid : false,
        isDelivered : false,
    };
    const user = users.find(user => user._id === currentUser._id);
    user.orders.push(orderDetails);
    res.status(200).send(user);
})
  





// listen
app.listen(PORT, () => console.log("backend is listening"));

