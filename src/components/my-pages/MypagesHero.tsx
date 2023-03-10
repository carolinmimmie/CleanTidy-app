import React from "react";
import FormBooking from "./FormBooking";
import { IBooking, INewBooking } from "./interfaces";

interface qwp {
  createBooking: (bokning: INewBooking) => Promise<void>;
  currentBookings: IBooking[];
}

const MypagesHero = ({ createBooking,currentBookings }: qwp) => {
  return (
    <div className="hero">
      <FormBooking createBooking={createBooking} currentBookings={currentBookings}></FormBooking>
    </div>
  );
};
export default MypagesHero;
