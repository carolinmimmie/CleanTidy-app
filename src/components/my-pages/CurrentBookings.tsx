import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { IBooking } from "./interfaces";

interface ICurrentbookings {
  bookings: IBooking[];
}

const columns: GridColDef[] = [
  {
    field: "delete",
    headerName: "Delete",
    width: 50,
    renderCell: () => {
      return (
        <DeleteIcon
          // onClick={() => deleteBooking(x.id)}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        ></DeleteIcon>
      );
    },
  },
  { field: "datum", headerName: "Datum", width: 120 },
  { field: "tid", headerName: "Tid", width: 120 },

  { field: "nivå", headerName: "Nivå", width: 120 },
  {
    field: "städare",
    headerName: "Städare",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    // valueGetter: (params: GridValueGetterParams) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

//test med date
let start = Date.now();
let date1 = new Date("2020-05-12T23:50:21.817Z");
let newdate = start.toString();

// const rows = [
//   { id: 1, datum: "Snow", tid: "Jon", nivå: 35, städare: "Marre" },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// const rows = {booking}

const CurrentBookings = ({ bookings }: ICurrentbookings) => {
  return (
    <div style={{ height: 400, width: 655, margin: "auto" }}>
      <Typography component="div" variant="h6">
        Kommande Bokningar
        {/* {date1.getFullYear()} {bookings.map((x) => <p>{x.datum.toString()}</p> )} */}
      </Typography>
      <DataGrid
        rows={bookings.map((x) => ({
          id: x.id,
          key: x.id,
          datum: x.datum.toDate().toLocaleDateString("sv-SE"),
          tid: x.datum.toDate().toLocaleTimeString("sv-SE"),
          nivå: x.niva,
          städare: x.stadare,
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default CurrentBookings;
