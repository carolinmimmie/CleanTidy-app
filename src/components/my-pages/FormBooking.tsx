import { FormatAlignLeftSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { time } from "console";
import { Timestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { IBooking } from "./interfaces";

interface IFormData {
  createBooking: (bokning: IBooking) => Promise<void>;
  currentBookings: IBooking[];
}

const FormBooking = ({ createBooking, currentBookings }: IFormData) => {
  // a.	Skapa ett state för att lagar all input, koppla dess innhåll till ett interface som definerar upp vilken typ som får finnas i ditt userObjekt.
  const [formData, setformData] = useState<IBooking>({
    id: "",
    // datum: new Timestamp(0, 0),
    datum: "",
    kund: `${currentBookings.map((x) => x.kund).at(-1)}`,
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
    const exists = currentBookings.findIndex(
      (x) =>
        x.datum.slice(0, 10) === formData.datum.slice(0, 10) && //kollar datumet
        x.datum.slice(11) === formData.datum.slice(11) && //kollar tid
        x.niva === formData.niva &&
        x.stadare === formData.stadare
    );
    console.log(exists);
    exists > -1
      ? alert("Kan inte boka! Bokningen finns redan")
      : createBooking(formData);

    // e.	I den kan du consol.loga formData för att se att hela formuläret är kopplat till ett objekt som skulle kunna skickas till backend.
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {
        currentBookings.map((x) => (
          <h2 className="kund" key={x.id}>
            {`Välkommen ${x.kund}`}
          </h2>
        ))[0]
      }
      <p className="underrubrik-form">Boka ny Städning:</p>
      <div className="box"></div>
      <div className="box">
        <input
          style={{ border: "1px" }}
          type="datetime-local"
          id="datum"
          name="datum"
          required
          value={formData.datum.toString()}
          onChange={handleChange}
        ></input>
      </div>
      <div className="box">
        <select
          id="stadare"
          name="stadare"
          required
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
            required
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
        <Button
          type="submit"
          sx={{
            bgcolor: " rgba(000000, 0, 0, 0.8);",
            ":hover": { bgcolor: "black ;" },
          }}
          variant="contained"
        >
          Lägg till bokning
        </Button>
      </div>
    </form>
  );
};
export default FormBooking;
