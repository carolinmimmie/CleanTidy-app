import React from "react";
import { useState } from "react";
interface IFormData {
  date: string;
  time: string;
  cleaner: string;
  service: string;
}

const Form = () => {
  // a.	Skapa ett state för att lagar all input, koppla dess innhåll till ett interface som definerar upp vilken typ som får finnas i ditt userObjekt.
  const [formData, setformData] = useState<IFormData>({
    date: "",
    time: "",
    cleaner: "",
    service: "",
  });

  //event utav typen React.ChangeEvent<HTMLInputElement>
  //name är de olika egenskaperna
  const [show, setShow] = useState(false);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // c.	Kalla på setFormData och updatera värderna i formData.
    setformData({ ...formData, [event.target.name]: event?.target.value });
  };
  // d.	Skapa en handleSubmit som du refererar till på din <form> onSubmit.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // e.	I den kan du consol.loga formData för att se att hela formuläret är kopplat till ett objekt som skulle kunna skickas till backend.
  };
  return (
    <fieldset>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Boka ny Städning:</h2>
        <div className="box">
          <label htmlFor="date">Välj datum:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            //Value = {formData.fistname} är de so  bor i formData
            value={formData.date}
            // b.	Skapa en handelChange metod som du kopplar till alla input-fält.
            //handleChange kopplar så de som användaren skriver i blir formDatan
            onChange={handleChange}
          ></input>
        </div>
        <div className="box">
          <label htmlFor="time">Välj tid:</label>
          <input
            type="time"
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          ></input>
        </div>

        {/* <div className="box">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          ></input>
        </div> */}
        <div className="box">
          <label htmlFor="cleaner">Välj städare:</label>
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

        <div className="box">
          <label htmlFor="service">Vilken typ av städning vill du ha?:</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Välj tjänst:</option>
            <option value="basic">Basic</option>
            <option value="topp">Topp</option>
            <option value="diamant">Diamant</option>
            <option value="fönster">Fönster</option>
          </select>
        </div>

        <div className="button">
          <button type="submit">CREATE ACCOUNT</button>
        </div>
      </form>
    </fieldset>
  );
};
export default Form;

// import { useForm, SubmitHandler } from "react-hook-form";
// import Switch from "@mui/material/Switch";
// interface IFormInput {
//   email: string;
//   password: string;
// }

// const Form = () => {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

//   const label = { inputProps: { "aria-label": "Color switch demo" } };

//   return (
//     <div className="form">
//       <h3 className="rubrik">Logga in på StädaFint</h3>
//       <p className="text">
//         Logga in genom att fylla i din e-postadress och lösenord.
//       </p>
//       <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
//         <label>E-post</label>
//         <input {...register("email")} />
//         <label>Password</label>
//         <input {...register("password")} />
//         <button className="log-in" type="submit">
//           Logga in
//         </button>
//         <div className="switch">
//           <Switch {...label} defaultChecked color="default" />
//           Kom ihåg mig
//         </div>
//         <hr></hr>
//         <button type="submit">Ny kund</button>
//       </form>
//     </div>
//   );
// };

// export default Form;
