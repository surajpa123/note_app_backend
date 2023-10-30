
const jwt  = require("jsonwebtoken")

// const env  = require("dotenv");

// env.config()


const verifyToken = (req,res,next)=>{

    try {

        //hsghsg

        const token =  req.headers.authorization; // Assuming token is sent in the "Authorization" header

        const decodeToken = jwt.verify(token, process.env.SECRET_KEY);

        req.username = decodeToken.userId


        next()
        
    } catch (error) {

        console.log(error)
        res.send(error)
    }
      
}

module.exports = verifyToken;