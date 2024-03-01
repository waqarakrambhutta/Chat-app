import User from "../models/user.models.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const { fullName, username, password, confirmPassword, gender} = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"Password don't match"})
        }

        const user = await User.findOne({username})

        if (user){
            return res.status(400).json({error:"User Already exists"})
        }

        // HASH PASSWORD HERE

        const salt = await bcrypt.genSalt(10);
        const hasshedPassword = await bcrypt.hash(password,salt)

        // https://avatar.iran.liara.run/

        const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hasshedPassword,
            gender,
            profilePic: gender === "male" ? boysProfilePic : girlsProfilePic
        })
        
        if(newUser){
            // USE jwt tokens here.
            generateTokenAndSetCookie(newUser._id,res);        

            await newUser.save()
    
            res.status(201).json({
                _id:username._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        return res.status(501).json({error:"Internal Server Error"})
    }
}

export const login = async (req,res)=>{
   
}

export const logout = (req,res)=>{
    console.log('LOGOUT User')
}
