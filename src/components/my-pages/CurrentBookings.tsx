import * as React from "react";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography } from "@mui/material";
import { IBooking } from "./interfaces";

interface ICurrentbookings {
  currentBookings: IBooking[];
  deleteBooking: (id: string) => Promise<void>;
}

const columns: GridColDef[] = [
  {
    field: "delete",
    headerName: "Del",
    width: 50,
    sortable: false,
    disableColumnMenu: true,

    renderCell: () => {
      return (
        <DeleteIcon
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
    sortable: false,
    width: 130,
  },
];

// const printId = (x: any) => {
//   x.field === "delete"
//     ? console.log(`Cellen är i fältet: "${x.field}" och id't är: "${x.id}"`)
//     : console.log("Cellen du klickat på är i fel fält");
// };

const CurrentBookings = ({
  currentBookings,
  deleteBooking,
}: ICurrentbookings) => {
  const x: GridEventListener<"cellClick"> = (
    params // GridCellParams<any>
  ) => {
    handleCellClick(params);
  };
  const handleCellClick = (x: any) => {
    x.field === "delete"
      ? deleteBooking(x.id)
      : console.log("Cellen du klickat på är i fel fält");
  };
  return (
    <div style={{ height: 400, width: 655, margin: "auto" }}>
      <Typography component="div" variant="h6">
        Kommande Bokningar
      </Typography>
      <DataGrid
        rows={currentBookings.map((x) => ({
          id: x.id,
          key: x.id,
          datum: x.datum.slice(0, 10),
          // .toDate().toLocaleDateString("sv-SE"),
          tid: x.datum.slice(11),
          // toDate().toLocaleTimeString("sv-SE"),
          nivå: x.niva,
          städare: x.stadare,
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onCellClick={x}
      />
    </div>
  );
};

export default CurrentBookings;
