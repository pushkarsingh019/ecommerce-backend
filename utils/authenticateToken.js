import jwt from "jsonwebtoken";

const authenticateToken = (req, res, next) => {
    const tokenHeader = req.headers['authorization'];
    const token = tokenHeader && tokenHeader.split(' ')[1];
    console.log(token);
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, ACCESS_SECRET, (err, user) => {
        if(err){return res.sendStatus(403)}
        req.user = user
        next()
    });
};

export default authenticateToken;