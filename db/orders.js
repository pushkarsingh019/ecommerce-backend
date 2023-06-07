/*
    order schema
    order : {
        _id : orderId,
        userId : id of the user,
        products : [array of all the products in the order],
        shippingAddress : {address : address, contactNumber : contactNumber},
        date : date of the order,
        totalCost : total cost of the order,
        isPaid : true || false,
        isDelivered : true || false,
    }
*/

const orders = [];

export default orders;