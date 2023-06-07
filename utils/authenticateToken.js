import jwt from "jsonwebtoken";
import { ACCESS_SECRET } from "./secret.js";

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    // const token = tokenHeader && tokenHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_SECRET, (err, user) => {
        if(err){return res.sendStatus(403)}
        req.user = user
        next()
    });
};

export default authenticateToken;