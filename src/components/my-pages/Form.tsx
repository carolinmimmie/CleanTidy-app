import { useForm, SubmitHandler } from "react-hook-form";
import Switch from "@mui/material/Switch";
interface IFormInput {
  email: string;
  password: string;
}

const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div className="form">
      <h3 className="rubrik">Logga in på StädaFint</h3>
      <p className="text">
        Logga in genom att fylla i din e-postadress och lösenord.
      </p>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>E-post</label>
        <input {...register("email")} />
        <label>Password</label>
        <input {...register("password")} />
        <button className="log-in" type="submit">
          Logga in
        </button>
        <div className="switch">
          <Switch {...label} defaultChecked color="default" />
          Kom ihåg mig
        </div>
        <hr></hr>
        <button type="submit">Ny kund</button>
      </form>
    </div>
  );
};

export default Form;
