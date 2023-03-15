import * as React from "react";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridEventListener,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Typography } from "@mui/material";
import { MyPagesC } from "../../context/MyPagesContext";
import {
  cStatus,
  dBooking,
  getCompletedBookings,
  getCurrentBookings,
} from "../../Api";
import { useContext } from "react";
import { UserContext } from "../../context/UserNameContext";
import { User } from "@firebase/auth";


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




const CurrentBookings = () => {
  const { user } = useContext(UserContext);
  
  const userName = (x: User | null) => {
    const dot = x?.email?.indexOf(".");
    const dot1 = `${x?.email?.slice(0, 1)}${x?.email}`.indexOf(".");
    const dot2 = `${x?.email?.slice(0, 2)}${x?.email}`.indexOf(".");
    const at = x?.email?.indexOf("@");
    const userFirstName = `${x?.email
      ?.slice(0, 1)
      .toUpperCase()}${x?.email?.slice(1, dot)}`;
    const userLastName = `${x?.email
      ?.slice(dot1, dot2)
      .toUpperCase()}${x?.email?.slice(dot2, at)}`;
    
      const fullName = `${userFirstName} ${userLastName}`
      return(fullName)
  };
  
  const changeStatus = async (id: string) => {
    await cStatus(id);
    const newCompletedBookings = await getCompletedBookings();
    const newCurrentBookings = await (await getCurrentBookings());
    setCompletedBookings(newCompletedBookings);
    setCurrentBookings(newCurrentBookings);
  };

  const deleteBooking = async (id: string) => {
    await dBooking(id);
    setCurrentBookings(await getCurrentBookings());
  };

  const { currentBookings, setCurrentBookings, setCompletedBookings } =
    React.useContext(MyPagesC);

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
