import { User } from "firebase/auth";
import React, { createContext, useState } from "react";
import FormBooking from "../components/my-pages/FormBooking";

interface IAuthDetailsContext {
  authUser: User | null
  setAuthUser:  (value: React.SetStateAction<User | null>) => void
  }
  
  //Skapa context
  export const AuthDetailsC = createContext<IAuthDetailsContext>({
    authUser: null,
    setAuthUser: () => {},
   
  });

  const AuthDetailsContext = () => {
    const [authUser, setAuthUser] = useState<User | null>(null);
      return (
        //WRAPPA MITT CONTEXT
        <AuthDetailsC.Provider value={{ authUser, setAuthUser }}>
            <FormBooking></FormBooking>
        </AuthDetailsC.Provider>
      );
    };
    
    export default AuthDetailsContext;
  
  
