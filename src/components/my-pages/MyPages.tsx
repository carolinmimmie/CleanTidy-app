import { Box } from "@mui/system";
import React from "react";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";
import Form from "./Form";

const MyPages = () => {
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
        <CurrentBookings></CurrentBookings>
      {/* </Box> */}
      <Form></Form>
    </div>
  );
};

export default MyPages;
