import { Timestamp } from "firebase/firestore";

interface IBooking {
  id: string;
  datum: Timestamp;
  kund: string;
  niva: string;
  stadare: string;
  status: boolean;
}

interface INewBooking {
  id: string;
  datum: string;
  kund: string;
  niva: string;
  stadare: string;
  status: boolean;
}

export type { IBooking, INewBooking };
