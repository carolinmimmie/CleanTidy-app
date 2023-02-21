import React from "react";
import "./App.css";
import Landingpage from "./components/landing-page/Landingpage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyPages from "./components/my-pages/MyPages";
import Form from "./components/my-pages/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Header></Header>
    //   <Landingpage></Landingpage>
    //   <MyPages></MyPages>
    //   <Footer></Footer>
    // </div>

    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="landingpage" element={<Landingpage />}></Route>
        <Route path="mypages" element={<MyPages />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
