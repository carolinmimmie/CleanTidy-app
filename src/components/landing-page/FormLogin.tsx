import { Button, Switch } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  let navigation = useNavigate();
  const handleClick = () => {
    navigation("/Mina Sidor");
  };
  return (
    <form className="form">
      <h2>Logga in:</h2>
      <div className="box">
        <input type="text" id="epost" name="epost" value="E-postadress"></input>
      </div>
      <div className="box">
        <input
          type="password"
          id="password"
          name="password"
          value="Lösenord"
        ></input>
      </div>
      <div className="button-box">
        <Button
          onClick={handleClick}
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
