import { FormatAlignLeftSharp } from "@mui/icons-material";
import { time } from "console";
import { Timestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { IBooking, INewBooking } from "./interfaces";

interface IFormData {
  createBooking: (bokning: INewBooking) => Promise<void>;
}

const FormBooking = ({ createBooking }: IFormData) => {
  // a.	Skapa ett state för att lagar all input, koppla dess innhåll till ett interface som definerar upp vilken typ som får finnas i ditt userObjekt.
  const [formData, setformData] = useState<INewBooking>({
    // id: Math.random().toString(),
    // datum: new Timestamp(0, 0),
    datum: "",
    kund: "Jessica Clarkson",
    niva: "",
    stadare: "",
    status: false,
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
    // if (formData.date || formData.time || formData.cleaner === "") {
    //   alert("Alla fält måste vara ifyllda!");
    // } else {
    // }
    console.log(formData);
    createBooking(formData);
    // e.	I den kan du consol.loga formData för att se att hela formuläret är kopplat till ett objekt som skulle kunna skickas till backend.
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Boka ny Städning:</h2>
      <div className="box"></div>
      <div className="box">
        <input
          type="datetime-local"
          id="datum"
          name="datum"
          required
          value={formData.datum.toString()}
          onChange={handleChange}
        ></input>
      </div>
      <div className="box">
        {/* <label htmlFor="cleaner">Välj städare:</label> */}
        <select
          id="stadare"
          name="stadare"
          value={formData.stadare}
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
            id="niva"
            name="niva"
            value="Basic"
            onChange={handleChange}
            checked={formData.niva === "Basic"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            Top:
          </label>
          <input
            type="radio"
            id="niva"
            name="niva"
            value="Top"
            onChange={handleChange}
            checked={formData.niva === "Top"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            Diamant:
          </label>
          <input
            type="radio"
            id="niva"
            name="niva"
            value="Diamant"
            onChange={handleChange}
            checked={formData.niva === "Diamant"}
          ></input>
        </div>
        <div className="box-input">
          <label className="label-radio" htmlFor="service">
            FönsterPuts:
          </label>
          <input
            type="radio"
            id="niva"
            name="niva"
            value="Fönster"
            onChange={handleChange}
            checked={formData.niva === "Fönster"}
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
export default FormBooking;
