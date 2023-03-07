import { FormatAlignLeftSharp } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
interface IFormData {
  date: string;
  time: string;
  cleaner: string;
  service: string;
  // createBooking: void;
}

const Form = () => {
  // a.	Skapa ett state för att lagar all input, koppla dess innhåll till ett interface som definerar upp vilken typ som får finnas i ditt userObjekt.
  const [formData, setformData] = useState<IFormData>({
    date: "",
    time: "",
    cleaner: "",
    service: "basic",
  });

  //event utav typen React.ChangeEvent<HTMLInputElement>
  //name är de olika egenskaperna

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // c.	Kalla på setFormData och updatera värderna i formData.
    setformData({ ...formData, [event.target.name]: event?.target.value });
  };
  // d.	Skapa en handleSubmit som du refererar till på din <form> onSubmit.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (formData.date || formData.time || formData.cleaner === "") {
      alert("Alla fält måste vara ifyllda!");
    } else {
    }
    console.log(formData);
    // e.	I den kan du consol.loga formData för att se att hela formuläret är kopplat till ett objekt som skulle kunna skickas till backend.
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Boka ny Städning:</h2>
      <div className="box">
        {/* <label htmlFor="date">Välj datum:</label> */}
        <input
          type="date"
          id="date"
          name="date"
          // required
          //Value = {formData.fistname} är de so  bor i formData
          value={formData.date}
          // b.	Skapa en handelChange metod som du kopplar till alla input-fält.
          //handleChange kopplar så de som användaren skriver i blir formDatan
          onChange={handleChange}
        ></input>
      </div>
      <div className="box">
        {/* <label htmlFor="time">Välj tid:</label> */}
        <input
          type="time"
          id="time"
          name="time"
          // required
          value={formData.time}
          onChange={handleChange}
        ></input>
      </div>
      <div className="box">
        {/* <label htmlFor="cleaner">Välj städare:</label> */}
        <select
          id="cleaner"
          name="cleaner"
          value={formData.cleaner}
          onChange={handleChange}
        >
          <option value="">Välj städare:</option>
          <option value="Hanna">Hanna</option>
          <option value="Daniel">Daniel</option>
          <option value="Jessica">Jessica</option>
        </select>
      </div>

      <div className="box-tjänster">
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            Basic:
          </label>
          <input
            type="radio"
            id="service"
            name="service"
            value="basic"
            onChange={handleChange}
            checked={formData.service === "basic"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            Top:
          </label>
          <input
            type="radio"
            id="service"
            name="service"
            value="top"
            onChange={handleChange}
            checked={formData.service === "top"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            Diamant:
          </label>
          <input
            type="radio"
            id="service"
            name="service"
            value="diamant"
            onChange={handleChange}
            checked={formData.service === "diamant"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            FönsterPuts:
          </label>
          <input
            type="radio"
            id="service"
            name="service"
            value="fönster"
            onChange={handleChange}
            checked={formData.service === "fönster"}
          ></input>
        </div>
      </div>

      <div className="button-box">
        <button className="button-form" type="submit">
          Lägg till bokning
        </button>
      </div>
    </form>
  );
};
export default Form;

