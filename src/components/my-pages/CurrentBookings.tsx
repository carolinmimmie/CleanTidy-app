import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridEventListener,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { IBooking } from "./interfaces";
import { MyPagesC } from "./MyPagesContext";
import {
  cStatus,
  dBooking,
  getCompletedBookings,
  getCurrentBookings,
} from "../../Api";

interface ICurrentbookings {
  // currentBookings: IBooking[];
  // deleteBooking: (id: string) => Promise<void>;
  // changeStatus: (id: string) => Promise<void>;
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

const CurrentBookings = ({}: // deleteBooking,
// changeStatus,
ICurrentbookings) => {
  const changeStatus = async (id: string) => {
    // const fetchBooks = async () => {
    await cStatus(id);
    // };
    // fetchBooks();
    const newCompletedBookings = await getCompletedBookings();
    const newCurrentBookings = await getCurrentBookings();
    setCompletedBookings(newCompletedBookings);
    setCurrentBookings(newCurrentBookings);
  };
  const deleteBooking = async (id: string) => {
    // const fetchBooks = async () => {
    await dBooking(id);
    // };
    // fetchBooks();
    setCurrentBookings(await getCurrentBookings());
  };
  const {
    currentBookings,
    setCurrentBookings,
    completedBookings,
    setCompletedBookings,
  } = React.useContext(MyPagesC);
  const x: GridEventListener<"cellClick"> = (params) => {
    handleDeleteClick(params);
    handleUpdateClick(params);
  };

  const handleDeleteClick = (x: GridCellParams) => {
    if (x.field === "delete") {
      deleteBooking(x.id.toString());
    }
  };

  const handleUpdateClick = (x: GridCellParams) => {
    if (x.field === "update") {
      changeStatus(x.id.toString());
    }
  };
  return (
    <div>
      <Typography component="div" variant="h6">
        Kommande Bokningar
      </Typography>
      <div className="current-bookings">
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
    </div>
  );
};

export default CurrentBookings;
