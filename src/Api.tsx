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
import { IBooking, INewBooking } from "./components/my-pages/interfaces";
import { db } from "./firebase.config";
// const bookingsCollectionRef = collection(db, "bookings");
// const qCurrent = query(bookingsCollectionRef, where("status", "==", false));
// const qCompleted = query(bookingsCollectionRef, where("status", "==", true));

const bookingsCollectionRef = collection(db, "bookings");

export const getCompletedBookings = async () => {
  const q = query(bookingsCollectionRef, where("status", "==", true));
  // query = en förfrågan mot bak-end som en filtrering vart den ska kolla where är villkoret med två villkor
  //hämta data utifrån en villkor
  //getDocs() en metod för hämta all data
  const data = await getDocs(q);
  return (
    //Gör om datat så det blir läsbart
    data.docs.map((doc) => ({
      ...(doc.data() as IBooking),
      //Det behövs typas då det är typescript
      //id kommer inte med då det inte är en del av obejktet i fältet i firebase
      id: doc.id,
    }))
  );
};

export const getCurrentBookings = async () => {
  const q = query(bookingsCollectionRef, where("status", "==", false));
  // query = en förfrågan mot bak-end som en filtrering vart den ska kolla where är villkoret med två villkor
  //hämta data utifrån en villkor
  //getDocs() en metod för hämta all data
  const data = await getDocs(q);
  return (
    //Gör om datat så det blir läsbart
    data.docs.map((doc) => ({
      ...(doc.data() as IBooking),
      //Det behövs typas då det är typescript
      //id kommer inte med då det inte är en del av obejktet i fältet i firebase
      id: doc.id,
    }))
  );
};

// export const getCurrentBookings = async () => {
//   // const [currentBookings, setCurrentBookings] = useState<IBooking[]>([]);
//   const dataCurrent = await getDocs(qCurrent);

//   return dataCurrent.docs.map((doc) => ({
//     ...(doc.data() as IBooking),
//     id: doc.id,
//   }));
// };
// export const getCompletedBookings = async () => {
//   // const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);
//   const dataCompleted = await getDocs(qCompleted);

//   return dataCompleted.docs.map((doc) => ({
//     ...(doc.data() as IBooking),
//     id: doc.id,
//   }));
// };

//FUNKTIONERNA
export const cStatus = async (id: string) => {
  await updateDoc(doc(bookingsCollectionRef, id), {
    status: true,
  });
  getCurrentBookings();
};

export const dBooking = async (id: string) => {
  await deleteDoc(doc(bookingsCollectionRef, id));
  getCompletedBookings();
  getCurrentBookings();
};

export const cBooking = async (bokning: INewBooking) => {
  await addDoc(bookingsCollectionRef, {
    // datum: bokning.datum,
    datum: Timestamp.fromDate(new Date(bokning.datum)),
    kund: bokning.kund,
    niva: bokning.niva,
    stadare: bokning.stadare,
    status: bokning.status,
  });

  getCurrentBookings();
};
