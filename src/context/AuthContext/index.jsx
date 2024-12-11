import { createContext } from "react";


export const AuthContexts = createContext(null);


export default function AuthProvider({children}){
  return (
    <AuthContexts.Provider value={{}}>
      {children}
    </AuthContexts.Provider>
  )
}