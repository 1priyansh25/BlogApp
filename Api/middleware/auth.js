import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

const getAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;
        // console.log(token);
        if(!token){
            return res.status(401).json({error: "Unauthorized"})
        }
        // console.log(token);
        const verifyToken = jwt.verify(token, process.env.SECRET)
        //console.log(verifyToken);
        if(!verifyToken){
            return res.status(401).json({error: "Unauthorized"})
        }
        // console.log(verifyToken);
        const auth = await User.findById(verifyToken.id)
        //console.log(auth);


        req.userId = verifyToken.id // Isme verifyToken ki id hain
        req.auth = auth // Isme user ka data hain
        next()
    } catch (error) {
        console.log(error.message);
        res.status(401).json({error: "Unauthorized"})
    }
}

export default getAuth;
