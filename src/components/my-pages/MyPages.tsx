import React from "react";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import Form from "./Form";

const MyPages = () => {
  return <div className="my-pages">
      <CompletedBookings></CompletedBookings>
      <CurrentBookings></CurrentBookings>
      <Form></Form>
  </div>;
};

export default MyPages;
