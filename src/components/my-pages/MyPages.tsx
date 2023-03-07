import { Box } from "@mui/system";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import Hero from "../header/Hero";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import { IBooking } from "./interfaces";

const MyPages = () => {
  const [currentBookings, setCurrentBookings] = useState<IBooking[]>([]);
  const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);
  const bookingsCollectionRef = collection(db, "bookings");
  const qCurrent = query(bookingsCollectionRef, where("status", "==", false));
  const qCompleted = query(bookingsCollectionRef, where("status", "==", true));

  const getBookings = async () => {
    const dataCurrent = await getDocs(qCurrent);

    setCurrentBookings(
      dataCurrent.docs.map((doc) => ({
        ...(doc.data() as IBooking),
        id: doc.id,
      }))
    );

    const dataCompleted = await getDocs(qCompleted);

    setCompletedBookings(
      dataCompleted.docs.map((doc) => ({
        ...(doc.data() as IBooking),
        id: doc.id,
      }))
    );
  };

  useEffect(() => {
    getBookings();
  }, []);

  const changeStatus = async (x: IBooking) => {
    await updateDoc(doc(bookingsCollectionRef, x.id), {
      status: !x.status,
    });
    getBookings();
  };

  const deleteBooking = async (id: string) => {
    await deleteDoc(doc(bookingsCollectionRef, id));
    getBookings();
  };

  const createBooking = async () => {
    await addDoc(bookingsCollectionRef, {
      //Här inne ska vi ta emot det objektet som submittas från formuläret
    });
    getBookings();
  };

  // console.log(bookings);

  return (
    <>
        <Hero></Hero>
      {
        currentBookings.map((x) => (
          <h2 className="titelMypages" key={x.id}>
            {`Välkommen ${x.kund}`}
          </h2>
        ))[0]
      }

      <Box className="my-pages">
        {/* <Form createBooking={createBooking}></Form> */}
        <CurrentBookings
          bookings={currentBookings}
          deleteBooking={deleteBooking}
        ></CurrentBookings>
        <CompletedBookings bookings={completedBookings}></CompletedBookings>
      </Box>
    </>
  );
};

export default MyPages;
