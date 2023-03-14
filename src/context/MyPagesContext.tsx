import React, { createContext, Dispatch, useEffect, useState } from "react";
import { getCompletedBookings, getCurrentBookings } from "../Api";
import { IBooking } from "../components/my-pages/interfaces";
import MyPages from "../components/my-pages/MyPages";

//Interface context
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

      const completedBookings = await getCompletedBookings();
      setCompletedBookings(completedBookings);
    };
    fetchBookings();

    //and an array of dependencies that make the effect fire.
  }, []);
  // wrappa context
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
