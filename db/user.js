// user schema
import { v4 as uuid } from "uuid"

export const users = [{
    _id : uuid(),
    name : "Gavin Belson",
    email : "gavin@hooli.com",
    password : "killpiedpiper",
    cart : [],
    wishlist : []
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