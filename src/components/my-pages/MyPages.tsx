import { Box } from "@mui/system";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import MypagesHero from "./MypagesHero";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import { IBooking, INewBooking } from "./interfaces";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeStatus = async (x: any) => {
    await updateDoc(doc(bookingsCollectionRef, x.id), {
      status: !x.status,
    });
    getBookings();
  };

  const deleteBooking = async (id: string) => {
    await deleteDoc(doc(bookingsCollectionRef, id));
    getBookings();
  };

  const createBooking = async (bokning: INewBooking) => {
    await addDoc(bookingsCollectionRef, {
      // datum: bokning.datum,
      datum: Timestamp.fromDate(new Date(bokning.datum)),
      kund: bokning.kund,
      niva: bokning.niva,
      stadare: bokning.stadare,
      status: bokning.status,
    });
    getBookings();
  };

  return (
    <>
      <MypagesHero
        createBooking={createBooking}
        currentBookings={currentBookings}
      ></MypagesHero>

      <Box className="my-pages">
        <CurrentBookings
          currentBookings={currentBookings}
          deleteBooking={deleteBooking}
          changeStatus={changeStatus}
        ></CurrentBookings>
        <CompletedBookings
          completedBookings={completedBookings}
          deleteBooking={deleteBooking}
        ></CompletedBookings>
      </Box>
    </>
  );
};

export default MyPages;
