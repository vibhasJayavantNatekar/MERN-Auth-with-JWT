const User = require('../models/usermodel')

//loginuser
const loginuser = async (req,res)=>{
    res.json({message:"login "})
}


//Signup user
const signupuser = async (req,res)=>{
    res.json({message:"signup "})
}


module.exports ={ loginuser , signupuser}