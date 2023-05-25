// user schema
import { v4 as uuid } from "uuid"

export const users = [{
    _id : uuid(),
    name : "Gavin Belson",
    email : "gavin@hooli.com",
    password : "killpiedpiper",
    cart : [],
    wishlist : [],
    address : [{id : uuid(), address : "Menlo Park, 2441 Sand Hill Rd, United States,", number : 12345678, default : true}],
    orders : []
}];

// cart schema
/*
    cart = [{
        productId : 1234,
        quantity : 3
    }]
*/

// wishlist schema
/*
    wishlist = [{
        productId : 1234,
        quantity : 3
    }]
*/