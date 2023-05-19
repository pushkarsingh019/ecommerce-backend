import express from "express";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 8080

// importing data to send
import { categories } from "./db/categories.js";
import { products } from "./db/products.js";
import { users } from "./db/user.js";

// importing utils
import authenticateToken from "./utils/authenticateToken.js";

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





// listen
app.listen(PORT, () => console.log("backend is listening"));

