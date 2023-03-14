import React from "react";
import "./App.css";

// import "App.css";
import Landingpage from "./components/landing-page/Landingpage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyPages from "./components/my-pages/MyPages";
import Form from "./components/my-pages/FormBooking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPagesContext from "./context/MyPagesContext";
import UserNameContext from "./context/UserNameContext";

function App() {
  return (
    <UserNameContext></UserNameContext>

    // <BrowserRouter>
    //   <Header></Header>
    //   <Routes>
    //     <Route path="/" element={<Landingpage />}></Route>
    //     <Route path="Om Oss" element={<Landingpage />}></Route>
    //     <Route path="StädaFint" element={<Landingpage />}></Route>
    //     <Route path="Våra Tjänster" element={<Landingpage />}></Route>
    //     <Route path="Mina Sidor" element={<MyPagesContext />}></Route>
    //   </Routes>
    //   <Footer></Footer>
    // </BrowserRouter>
  );
}

export default App;
