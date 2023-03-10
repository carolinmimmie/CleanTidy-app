import * as React from "react";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { IBooking } from "./interfaces";

interface ICurrentbookings {
  currentBookings: IBooking[];
  deleteBooking: (id: string) => Promise<void>;
  changeStatus: (id: string) => Promise<void>;
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
    width: 120,
  },
  {
    field: "update",
    headerName: "Update",
    width: 120,
    sortable: false,
    disableColumnMenu: true,

    renderCell: () => {
      return (
        <Button
          // onClick={changeStatus}
          sx={{
            ml: 1,
            bgcolor: " rgba(000000, 0, 0, 0.8);",
            ":hover": { bgcolor: "black ;" },
          }}
          variant="contained"
        >
          Klar
        </Button>
      );
    },
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
  changeStatus,
}: ICurrentbookings) => {
  const x: GridEventListener<"cellClick"> = (
    params // GridCellParams<any>
  ) => {
    handleDeleteClick(params);
    handleUpdateClick(params);
  };
  
  const handleDeleteClick = (x: any) => {
    if(x.field === "delete"){
      deleteBooking(x.id)
    }
  };

  const handleUpdateClick = (x: any) => {
    if(x.field === "update"){
      changeStatus(x)

    }
    
  };
  return (
    <div className="currentbookings" style={{ height: 400, width: 655 }}>
      <Typography component="div" variant="h6">
        Kommande Bokningar
      </Typography>
      <DataGrid
        rows={currentBookings.map((x) => ({
          id: x.id,
          key: x.id,
          datum: x.datum.toDate().toLocaleDateString("sv-SE"),
          tid: x.datum.toDate().toLocaleTimeString("sv-SE").slice(0, 5),
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
