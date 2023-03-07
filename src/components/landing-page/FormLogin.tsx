import { Switch } from "@mui/material";
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
        <input
          type="text"
          id="epost"
          name="epost"
          placeholder="E-postadress"
        ></input>
      </div>
      <div className="box">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Lösenord"
        ></input>
      </div>
      <div className="button-box">
        <button onClick={handleClick} className="button-form" type="submit">
          Logga in
        </button>
      </div>
    </form>

    /* <h3 className="rubrik">Boka ny städning</h3>
      <p className="text">
        Fyll i formuläret, din bokning ser du under kommande bokningar. 
      </p>

      <form className="input-container">
        <label htmlFor="date">Välj datum</label>
        <input type="date"
        
        />
        <label htmlFor='time'>Välj tid:</label>
        <input type="time"/>

        <label htmlFor='inputSelect'>Välj städare</label>
        <select id="inputSelect">
        <option></option>
        </select>

        <label className= "label-radio" htmlFor="stadning"> Vilken typ av städning vill du ha?</label>
        
        <div  className='radio'>
<label htmlFor='basicStadning'>Basic städning </label>
<input type="radio" />
        </div>

        
        <div  className='radio'>
<label htmlFor='toppStadning'>Topp städning </label>
<input type="radio" />
        </div>

        <input className='addButton' type="submit">Bekräfta och boka</input>
      </form> */
  );
};

export default FormLogin;
