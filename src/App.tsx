import React from "react";
import "./App.css";
import Landingpage from "./components/landing-page/Landingpage";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import MyPages from "./components/my-pages/MyPages";
import Form from "./components/my-pages/Form";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landingpage></Landingpage>
      <MyPages></MyPages>
      <Footer></Footer>
    </div>
  );
}

export default App;
