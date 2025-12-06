const User = require('../models/usermodel')
const jwt  = require('jsonwebtoken')

const createToken = (_id)=>{
 return  jwt.sign({_id },process.env.SECRET , {expiresIn:'3d'})
}

//loginuser
const loginuser = async (req,res)=>{
    res.json({message:"login "})
}


//Signup user
const signupuser = async (req,res)=>{
    const {email , password}= req.body

    try {
        const user =await User.signup(email , password)
         
        //create a token
       const token = createToken(user._id)

        res.status(200).json({email ,token})
    } catch (err) {
        
        res.status(400).json({error : err.message})
    }

}


module.exports ={ loginuser , signupuser}