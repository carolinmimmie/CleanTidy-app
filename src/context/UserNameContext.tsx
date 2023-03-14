import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Landingpage from "../components/landing-page/Landingpage";
import MyPagesContext from "./MyPagesContext";
import Footer from "../components/footer/Footer";

interface IUserContext {
  user: User | null;
  setUser: (value: React.SetStateAction<User | null>) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

const UserNameContext = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Landingpage />}></Route>
          <Route path="Om Oss" element={<Landingpage />}></Route>
          <Route path="StädaFint" element={<Landingpage />}></Route>
          <Route path="Våra Tjänster" element={<Landingpage />}></Route>
          <Route path="Mina Sidor" element={<MyPagesContext />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default UserNameContext;
