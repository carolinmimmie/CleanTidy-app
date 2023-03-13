import React, { useContext } from "react";
import FormBooking from "./FormBooking";
import { IBooking, INewBooking } from "./interfaces";
import { MyPagesC } from "./MyPagesContext";

interface qwp {
  // createBooking: (bokning: INewBooking) => Promise<void>;
  // currentBookings: IBooking[];
}

const MypagesHero = ({ }: qwp) => {
  const {
    currentBookings,
    setCurrentBookings,
    completedBookings,
    setCompletedBookings,
  } = useContext(MyPagesC);
  return (
    <div className="hero">
      <FormBooking ></FormBooking>
    </div>
  );
};
export default MypagesHero;
