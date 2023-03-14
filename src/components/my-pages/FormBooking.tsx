import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { cBooking, getCurrentBookings } from "../../Api";
import { INewBooking } from "./interfaces";
import { MyPagesC } from "../../context/MyPagesContext";
import { UserContext } from "../../context/UserNameContext";

const FormBooking = () => {
  const { user } = useContext(UserContext);
  const createBooking = async (bokning: INewBooking) => {
    await cBooking(bokning);

    setCurrentBookings(await getCurrentBookings());
  };

  const dot = user?.email?.indexOf(".");
  const dot1 = `${user?.email?.slice(0, 1)}${user?.email}`.indexOf(".");
  const dot2 = `${user?.email?.slice(0, 2)}${user?.email}`.indexOf(".");
  const at = user?.email?.indexOf("@");
  const userFirstName = `${user?.email
    ?.slice(0, 1)
    .toUpperCase()}${user?.email?.slice(1, dot)}`;
  const userLastName = `${user?.email
    ?.slice(dot1, dot2)
    .toUpperCase()}${user?.email?.slice(dot2, at)}`;

  const { currentBookings, setCurrentBookings } = useContext(MyPagesC);

  const [formData, setformData] = useState<INewBooking>({
    id: "",
    datum: "",
    kund: userFirstName + " " + userLastName,
    niva: "",
    stadare: "",
    status: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setformData({ ...formData, [event.target.name]: event?.target.value });
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    const exists = currentBookings.findIndex(
      (x) =>
        x.datum.toDate().toLocaleDateString("sv-SE") ===
          formData.datum.slice(0, 10) && 
        x.datum.toDate().toLocaleTimeString("sv-SE").slice(0, 5) ===
          formData.datum.slice(11) && 
        x.niva === formData.niva &&
        x.stadare === formData.stadare
    );

    exists > -1
      ? alert("Kan inte boka! Bokningen finns redan")
      : createBooking(formData);
    console.log("Här är console loggen för formdata");
    console.log(formData);
  };

  useEffect(() => {
    return () => {
      console.log(`Välkommen ${userFirstName} ${userLastName}`);
    };
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ mb: 4 }}>
        {`Välkommen ${userFirstName} ${userLastName}`}
      </Typography>

      <p className="underrubrik-form">Boka ny Städning:</p>
      <div className="box"></div>
      <div className="box">
        <input
          style={{ border: "1px" }}
          type="datetime-local"
          id="datum"
          name="datum"
          required
          value={formData.datum}
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
