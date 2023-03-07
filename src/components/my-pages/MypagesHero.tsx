import React from "react";
import FormBooking from "./FormBooking";
import { IBooking, INewBooking } from "./interfaces";

interface qwp {
  createBooking: (bokning: INewBooking) => Promise<void>;
}

const MypagesHero = ({ createBooking }: qwp) => {
  return (
    <div className="hero">
      <FormBooking createBooking={createBooking}></FormBooking>
    </div>
  );
};
export default MypagesHero;
