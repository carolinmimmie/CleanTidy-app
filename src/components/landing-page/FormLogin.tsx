import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const navigation = useNavigate();

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigation("/Mina Sidor");
      })
      .catch((error) => {
        console.log(error);
        setErrorEmail(true);
        setErrorPassword(true);
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {errorEmail && (
          <p className="error">
            {" "}
            Vänligen ange en korrekt e-postadress (ex.namn@exempel.se).
          </p>
        )}
      </div>
      <div className="box">
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {errorPassword && <p className="error"> Lösenord krävs.</p>}
      </div>
      <div className="button-box">
        <Button
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
