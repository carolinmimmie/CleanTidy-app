import React, { createContext, Dispatch, useEffect, useState } from "react";
import { getCompletedBookings, getCurrentBookings } from "../../Api";
import CurrentBookings from "./CurrentBookings";
import { IBooking } from "./interfaces";
import MyPages from "./MyPages";

//Interface för mitt context
interface IMyPagesContext {
  currentBookings: IBooking[];
  setCurrentBookings: Dispatch<React.SetStateAction<IBooking[]>>;
  completedBookings: IBooking[];
  setCompletedBookings: Dispatch<React.SetStateAction<IBooking[]>>;
}

//Skapa context
export const MyPagesC = createContext<IMyPagesContext>({
  currentBookings: [],
  setCurrentBookings: () => {},
  completedBookings: [],
  setCompletedBookings: () => {},
});
const MyPagesContext = () => {
  const [currentBookings, setCurrentBookings] = useState<IBooking[]>([]);
  const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const currentBookings = await getCurrentBookings();
      setCurrentBookings(currentBookings);
      console.log(currentBookings);

      const completedBookings = await getCompletedBookings();
      setCompletedBookings(completedBookings);
      console.log(completedBookings);
    };
    fetchBookings();

    //  getCurrentBookings();
    //  getCompletedBookings();

    //and an array of dependencies that make the effect fire.
  }, []);
  // skapar en komponent vars avsikt enbart är att visa upp parents och wrappa den i ett context
  return (
    <>
      <MyPagesC.Provider
        value={{
          currentBookings,
          setCurrentBookings,
          completedBookings,
          setCompletedBookings,
        }}
      >
        <MyPages></MyPages>
      </MyPagesC.Provider>
    </>
  );
};

export default MyPagesContext;
