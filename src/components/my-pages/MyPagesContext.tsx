import React, { createContext, Dispatch, useEffect, useState } from "react";
import { getCompletedBookings, getCurrentBookings } from "../../Api";
import { IBooking } from "./interfaces";
import MyPages from "./MyPages";

interface IMyPagesContext {
  currentBookings: IBooking[];
  setCurrentBookings: Dispatch<React.SetStateAction<IBooking[]>>;
  completedBookings: IBooking[];
  setCompletedBookings: Dispatch<React.SetStateAction<IBooking[]>>;
}

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

    
  }, []);
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
