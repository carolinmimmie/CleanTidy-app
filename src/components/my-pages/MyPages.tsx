import { Box } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Interface } from "readline";
import { db } from "../../firebase.config";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import Form from "./Form";
import FormsBooking from "./FormsBooking";
import { IBookings } from "./interfaces";



const MyPages = () => {
const [bookings, setBookings] = useState<IBookings[]>([])
const bookingsCollectionRef = collection(db, "bookings")

useEffect(() => {
  const getBookings = async () => {
    const data = await getDocs(bookingsCollectionRef)
    setBookings(data.docs.map(doc => ({
      ...(doc.data() as IBookings), id: doc.id
    })))
  }
  getBookings()
}, [])


  return (
    <div className="my-pages">
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      > */}
      <CompletedBookings></CompletedBookings>
      <CurrentBookings bookings = {bookings}></CurrentBookings>
      {/* </Box> */}
      <Form></Form>
    
    </div>
  );
};

export default MyPages;
