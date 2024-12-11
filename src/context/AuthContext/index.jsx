import { createContext, useContext, useState } from "react";


export const AuthContexts = createContext(null);


export default function AuthProvider({children}){
  const [signInFormData,setSignInFormData] = useState({
    email:"",
    password:""
  });
  const [signUpFormData,setSignUpFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  return (
    <AuthContexts.Provider value={{
      signInFormData,setSignInFormData,
      signUpFormData,setSignUpFormData
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