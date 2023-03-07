import { Timestamp } from "firebase/firestore";

interface IBooking {
  id: string;
  datum: string;
  kund: string;
  niva: string;
  stadare: string;
  status: boolean;
}

interface INewBooking {
  datum: string;
  kund: string;
  niva: string;
  stadare: string;
  status: boolean;
}

export type { IBooking, INewBooking };
