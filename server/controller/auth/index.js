import User from "../../models/user.js";

export const register = async (req,res,next) => {
  try{  
    // const {username,email,password,role} = req.body;
    const existingUser = await User.findOne({email:req.body.email});
    if(!existingUser){
      throw new Error("user not found")
    }
    const user = await User.create(req.body)
    res.status(200).json({
      message:"user registered successfully",
      data:user
    })

  }catch(error){
    console.log(error);
  }
}