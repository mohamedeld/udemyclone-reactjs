import CommonForm from "@/components/common-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginControls, signUpControls } from "@/config";
import { useAuth } from "@/context/AuthContext";
import { GraduationCap } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useFetcher } from "react-router-dom"

const AuthPage = () => {
  const [activeTab,setActiveTab] = useState("signin");
  const handleValueChange = (value)=>{
    setActiveTab(value);
  }
  const {signInFormData,setSignInFormData,
    signUpFormData,setSignUpFormData} = useAuth();

    useEffect(()=>{
      setSignUpFormData({})
      setSignInFormData({})
    },[activeTab])
    
    function isValidSignIn(){
      return signInFormData && (signInFormData?.email !== ""&& signInFormData?.email?.includes("@")) && (signInFormData?.password?.length < 6 && signInFormData?.password !== "")
    }
    function isValidSignUp(){
      return signUpFormData &&  signUpFormData?.username !=="" && (signUpFormData?.email !== ""&& signUpFormData?.email?.includes("@")) && (signUpFormData?.password?.length > 6 && signUpFormData?.password !== "")
    }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link to="/" className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4"/>
          <span className="font-extrabold text-xl">LMS LEARN</span>
        </Link>
      </header>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Tabs
          value={activeTab}
          defaultValue="signin"
          onValueChange={handleValueChange}
          className="w-full max-w-md "
        > 
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value={"signin"}>Sign In</TabsTrigger>
            <TabsTrigger value={"signup"}>Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="p-4 space-y-4">
              <CardHeader>
                <CardTitle>Sign in to your account</CardTitle>
              <CardDescription>
                Enter your email and password to access your account
              </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
              <CommonForm
                formControls={loginControls}
                btnText="Sign In"
                formData={signInFormData}
                setFormData={setSignInFormData}
                disabledBtn={isValidSignIn()}
              />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
          <Card className="p-4 space-y-4">
              <CardHeader>
                <CardTitle>Sign up to your account</CardTitle>
              <CardDescription>
                Create new account to join us
              </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
            <CommonForm
              formControls={signUpControls}
              formData={signUpFormData}
                setFormData={setSignUpFormData}
                disabledBtn={isValidSignUp()}

            />
                </CardContent>
                </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AuthPage