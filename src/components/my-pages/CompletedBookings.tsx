import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { IBooking, INewBooking } from "./interfaces";

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
      />
    </div>
  );
};

export default CompletedBookings;
