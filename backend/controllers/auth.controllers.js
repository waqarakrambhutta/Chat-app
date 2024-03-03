import User from "../models/user.model.js"
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
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || " ")

        if (!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id:username._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic
        })

    } catch (error) {
        console.log("Error in login controller", error.message)
        return res.status(501).json({error:"Internal Server Error"})
    }
}

export const logout = async (req,res)=>{
   try {
        res.cookie("jwt","",{maxAge:0})    
        res.status(200).json({message:"Loged out Successfully"})
} catch (error) {
        console.log("Error in login controller", error.message)
        return res.status(501).json({error:"Internal Server Error"})
   }
}
