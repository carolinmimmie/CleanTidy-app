import React from "react";
import "./App.css";
import Landingpage from "./components/landing-page/Landingpage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landingpage></Landingpage>
      <Footer></Footer>
    </div>
  );
}

export default App;
