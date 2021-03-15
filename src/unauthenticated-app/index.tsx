import React, { useState } from "react";
import { RegisterScreen } from "./register";
import { LoginScreen } from "./login";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  return <div>
    {
      isRegister? <RegisterScreen/> : <LoginScreen/>
    }
    <button onClick={() => setIsRegister(!isRegister)}>switch to {isRegister? 'login' : 'register'}</button>
  </div>
}
