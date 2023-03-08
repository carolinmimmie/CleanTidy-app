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
import MypagesHero from "./MypagesHero";
import Hero from "./MypagesHero";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import { IBooking } from "./interfaces";
import FormBooking from "./FormBooking";

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

  // const changeStatus = async (x: IBooking) => {
  //   await updateDoc(doc(bookingsCollectionRef, x.id), {
  //     status: !x.status,
  //   });
  //   getBookings();
  // };

  const deleteBooking = async (id: string) => {
    await deleteDoc(doc(bookingsCollectionRef, id));
    getBookings();
  };

  const createBooking = async (bokning: IBooking) => {
    await addDoc(bookingsCollectionRef, {
      datum: bokning.datum,
      kund: bokning.kund,
      niva: bokning.niva,
      stadare: bokning.stadare,
      status: bokning.status,
    });
    getBookings();
  };

  // const createBooking = async () => {
  //   await addDoc(bookingsCollectionRef, {
  //     datum: "Datumen",
  //     kund: "Jessica Clarkson",
  //     niva: "",
  //     stadare: "",
  //     status: false,
  //   });
  //   getBookings();
  // };

  // console.log(bookings);

  return (
    <>
      <MypagesHero
        createBooking={createBooking}
        currentBookings={currentBookings}
      ></MypagesHero>
      {/* {
        currentBookings.map((x) => (
          <h2 className="titelMypages" key={x.id}>
            {`Välkommen ${x.kund}`}
          </h2>
        ))[0]
      } */}

      <Box className="my-pages">
        {/* <Form createBooking={createBooking}></Form> */}
        {/* <FormBooking></FormBooking> */}
        <CurrentBookings
          currentBookings={currentBookings}
          deleteBooking={deleteBooking}
        ></CurrentBookings>
        <CompletedBookings
          completedBookings={completedBookings}
        ></CompletedBookings>
      </Box>
    </>
  );
};

export default MyPages;
