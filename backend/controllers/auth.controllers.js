import User from "../models/user.models.js"

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

        // https://avatar.iran.liara.run/

        const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boysProfilePic : girlsProfilePic
        })

        await newUser.save()

        res.status(201).json({
            _id:username._id,
            fullName:newUser.fullName,
            username:newUser.username,
            profilePic:newUser.profilePic
        })
    } catch (error) {
        console.log("Error in signup controller", error.message)
        return res.status(501).json({error:"Internal Server Error"})
    }
}

export const login = (req,res)=>{
    console.log('LOGIN User')
}

export const logout = (req,res)=>{
    console.log('LOGOUT User')
}
