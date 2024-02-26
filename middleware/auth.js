const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    let token
    let header = req.headers.Authorization || req.headers.authorization;
    // console.log(header);
    if(header && header.startsWith("Bearer")){
        token = header.split(" ")[1];
        jwt.verify(token,process.env.Secret_Key,(err,decoded)=>{
            if(err){
                return res.status(401).json({msg:"User is not authorized"})
            }
            req.user = decoded.user;
            // console.log(decoded);
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("User is not authorized or token is missing")
        }
    }
}

module.exports = auth;