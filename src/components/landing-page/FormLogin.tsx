import { Button, Switch } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigation = useNavigate();
  // const handleClick = () => {
  //   navigation("/Mina Sidor");

  //   //   const login = (email: string, password: string & number) => {
  //   //     return auth.signInWithEmailAndPassword(email, password);
  //   //   };
  // };

  const login = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigation("/Mina Sidor");
      })
      .catch((error) => {
        console.log(error);
        alert("Fel mail-address eller lösenord");
      });
  };
  return (
    <form className="form">
      <h2>Logga in:</h2>
      <div className="box">
        <input
          type="text"
          id="epost"
          name="epost"
          // value="E-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="box">
        <input
          type="password"
          id="password"
          name="password"
          // value="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="button-box">
        <Button
          // onClick={handleClick}
          onClick={login}
          type="submit"
          sx={{
            bgcolor: " rgba(000000, 0, 0, 0.8);",
            ":hover": { bgcolor: "black ;" },
          }}
          variant="contained"
        >
          Logga in
        </Button>
      </div>
    </form>
  );
};

export default FormLogin;
