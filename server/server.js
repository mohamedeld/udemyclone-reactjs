import express from "express"
import {config} from "dotenv"
import cors from "cors";
import mongoose from "mongoose";

config()


const app = express();
app.use(cors({
  origin:process.env.CLIENT_URL,
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-Type','Authorization']
}));



const PORT = process.env.PORT || 8000

app.use((error,req,res,next)=>{
  res.status(500).json({
    status:false,
    message:'something went wrong',
    stack:error?.stack
  })
})


const startServer = ()=>{
  app.listen(process.env.PORT,()=>{
    // connect to mongodb
    console.log(`server is running on port ${PORT}`);
  })
}
mongoose.connect(process.env.DB_URL).then(()=>{
  console.log("connected to db successfully");
  startServer();
}).catch(err=> console.log(err));
