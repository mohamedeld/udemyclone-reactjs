import mongoose from "mongoose"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"user name is required"]
  },
  email:{
    type:String,
    unique:true,
    required:[true,"email is required"]
  },
  password:{
    type:String,
    required:[true,"password is required"],
  }
})

userSchema.pre('save',async function(next){
  if(!this.isModified('password')){
    return next();
  }
  try{
    const hasedPassword = await bcrypt.hash(this?.password,12);
    this.password = hasedPassword;
    next();
  }catch(error){
    next(error)
  }
})

userSchema.methods.generateToken = function(){
  const token = jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });
  return token;
}

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;