import { Timestamp } from "firebase/firestore";

interface IBookings {
  datum: Timestamp;
  kund: string;
  niva: string;
  stadare: string;
  status: boolean;
}

export type {IBookings} 