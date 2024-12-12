import axiosInstance from "@/api/axiosInstance";

export const registerServices = async (data)=>{
  try{
    const response = await axiosInstance.post('register',data);
    return response;
  }catch(error){
    console.log(error);
    
  }
}