import { Timestamp } from "firebase/firestore";
import { User } from "@firebase/auth";

interface IBooking {
  id: string;
  datum: Timestamp;
  kund: User;
  niva: string;
  stadare: string;
  status: boolean;
}

interface INewBooking {
  id: string;
  datum: string;
  kund: User | null;
  niva: string;
  stadare: string;
  status: boolean;
}

export type { IBooking, INewBooking };
