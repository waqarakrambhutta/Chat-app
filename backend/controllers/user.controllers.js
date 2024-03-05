export default getUsersForSidebar = () =>{
    try {
        
    } catch (error) {
        console.error("Error in getUserForSidebar controller ",error.message)
        return res.status(500).json({error:"Internal Server Error"})
    }
}


