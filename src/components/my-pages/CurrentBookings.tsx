import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { IBooking } from "./interfaces";
import { useParams } from "react-router-dom";

interface ICurrentbookings {
  bookings: IBooking[];
  deleteBooking: (id: string) => Promise<void>;
}

const columns: GridColDef[] = [
  {
    field: "delete",
    headerName: "Delete",
    width: 55,
    sortable: false,
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
    //   `${params.row.datum || ""} ${params.row.tid || ""} ${
    //     params.row.nivå || ""
    //   } ${params.row.städare || ""}`,
  },
];

const printId = (x: any) => {
  x.field === "delete"
    ? console.log(`Cellen är i fältet: "${x.field}" och id't är: "${x.id}"`)
    : console.log("Cellen du klickat på är i fel fält");

  // console.log(x.field);
};

// const handleDelete = (x: any) => {
//   x.field === "delete"
//     ? deleteBooking(x.id)
//     : console.log("Cellen du klickat på är i fel fält");
// };

const handleOnCellClick: GridEventListener<"cellClick"> = (
  params, // GridCellParams<any>
  event, // MuiEvent<React.MouseEvent<HTMLElement>>
  details // GridCallbackDetails
) => {
  printId(params);
};

const CurrentBookings = ({ bookings, deleteBooking }: ICurrentbookings) => {
  return (
    <div style={{ height: 400, width: 655, margin: "auto" }}>
      <Typography component="div" variant="h6">
        Kommande Bokningar
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
        onCellClick={handleOnCellClick}
      />
    </div>
  );
};

export default CurrentBookings;
