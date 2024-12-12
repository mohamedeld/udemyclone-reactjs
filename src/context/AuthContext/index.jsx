import { createContext, useContext, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { registerServices } from "@/services/auth";


export const AuthContexts = createContext(null);


export default function AuthProvider({children}){
  const {toast} = useToast();

  const [signInFormData,setSignInFormData] = useState({
    email:"",
    password:""
  });
  const [signUpFormData,setSignUpFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  const handleRegister = async ()=>{
    try{
      const response = await registerServices(signUpFormData);
      if(response?.status === 200){
        toast({
          message:"user registered successfully"
        });
      }
    }catch(error){
      toast({
        description:error?.response?.data?.message,
        message:error?.message
      })
    }
  }
  return (
    <AuthContexts.Provider value={{
      signInFormData,setSignInFormData,
      signUpFormData,setSignUpFormData,
      handleRegister
    }}>
      {children}
    </AuthContexts.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContexts);
  if(context === undefined){
    throw new Error("something went wrong with auth");
  }
  return context;
}