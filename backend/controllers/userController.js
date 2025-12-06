const User = require('../models/usermodel')

//loginuser
const loginuser = async (req,res)=>{
    res.json({message:"login "})
}


//Signup user
const signupuser = async (req,res)=>{
    const {email , password}= req.body

    try {
        const user =await User.signup(email , password)

        res.status(200).json({email ,user})
    } catch (err) {
        
        res.status(400).json({error : err.message})
    }

}


module.exports ={ loginuser , signupuser}