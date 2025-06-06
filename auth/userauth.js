const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

async function Userauth(req,res,next){ //Auth middleware
const token = req.headers.token;

if(!token){
    res.status(400).json({ //checking if token is present or not
        message : "No token in header"
    })
}
else{
    try{
        const decodeddata = JWT.verify(token , JWT_SECRET);

    if(!decodeddata){
        res.status(400).json({
            message : "Wrong token"
        })
    }
    else{
        req.userid = decodeddata.id;
        next();
    }}
    catch(e){
        console.log("Token couldnt be authenticated")
    }
}
}

module.exports = {
    Userauth : Userauth
}