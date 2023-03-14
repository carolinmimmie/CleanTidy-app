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
// import React from "react";
import { IBooking, INewBooking } from "./components/my-pages/interfaces";
import { db } from "./firebase.config";

const bookingsCollectionRef = collection(db, "bookings");

export const getCompletedBookings = async () => {
  const q = query(bookingsCollectionRef, where("status", "==", true));

  const data = await getDocs(q);
  return data.docs.map((doc) => ({
    ...(doc.data() as IBooking),

    id: doc.id,
  }));
};

export const getCurrentBookings = async () => {
  const q = query(bookingsCollectionRef, where("status", "==", false));

  const data = await getDocs(q);
  return data.docs.map((doc) => ({
    ...(doc.data() as IBooking),

    id: doc.id,
  }));
};

export const cStatus = async (id: string) => {
  await updateDoc(doc(bookingsCollectionRef, id), {
    status: true,
  });
  getCurrentBookings();
  getCompletedBookings();
};

export const dBooking = async (id: string) => {
  await deleteDoc(doc(bookingsCollectionRef, id));
  getCompletedBookings();
  getCurrentBookings();
};

export const cBooking = async (bokning: INewBooking) => {
  await addDoc(bookingsCollectionRef, {
    datum: Timestamp.fromDate(new Date(bokning.datum)),
    kund: bokning.kund,
    niva: bokning.niva,
    stadare: bokning.stadare,
    status: bokning.status,
  });

  getCurrentBookings();
};
