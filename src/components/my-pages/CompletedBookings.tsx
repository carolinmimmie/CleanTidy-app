import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridFooter,
  GridFooterContainer,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { IBooking } from "./interfaces";
import { Button } from "@mui/material";
import Footer from "../Footer";

interface ICompletedBookings {
  bookings: IBooking[];
}

const columns: GridColDef[] = [
  { field: "datum", headerName: "Datum", width: 120 },
  { field: "tid", headerName: "Tid", width: 120 },
  { field: "nivå", headerName: "Nivå", width: 120 },
  {
    field: "städare",
    headerName: "Städare",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const CompletedBookings = ({ bookings }: ICompletedBookings) => {
  const CustomFooter = () => {
    return (
      <GridFooterContainer>
        <Button 
          sx={{
            ml: 1,
            bgcolor: " #a09d99;",
            ":hover": { bgcolor: " #a09d99;" },
          }}
          variant="contained"
        >
          Ta bort alla markerade
        </Button>
        <GridFooter
          sx={{
            border: "none", // To delete double border.
          }}
        />
      </GridFooterContainer>
    );
  };
  return (
    <div style={{ height: 400, width: 655, margin: "auto" }}>
      <Typography component="div" variant="h6">
        Utförda Bokningar
      </Typography>
      <DataGrid
        rows={bookings.map((x) => ({
          id: x.id,
          key: x.id,
          datum: x.datum,
          // .toDate().toLocaleDateString("sv-SE"),
          tid: x.datum,
          // .toDate().toLocaleTimeString("sv-SE"),
          nivå: x.niva,
          städare: x.stadare,
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        components={{ Footer: CustomFooter }}
      />
    </div>
  );
};

export default CompletedBookings;
