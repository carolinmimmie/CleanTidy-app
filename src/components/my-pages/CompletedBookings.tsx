import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridFooter,
  GridFooterContainer,
  GridSelectionModel,
} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { dBooking, getCompletedBookings } from "../../Api";
import { MyPagesC } from "../../context/MyPagesContext";

const columns: GridColDef[] = [
  { field: "datum", headerName: "Datum", width: 120 },
  { field: "tid", headerName: "Tid", width: 120 },
  { field: "nivå", headerName: "Nivå", width: 120 },
  {
    field: "städare",
    headerName: "Städare",
    sortable: false,
    width: 120,
  },
];

const CompletedBookings = () => {
  const deleteBooking = async (id: string) => {
    await dBooking(id);
    setCompletedBookings(await getCompletedBookings());
  };

  const { completedBookings, setCompletedBookings } = useContext(MyPagesC);
  const [rowIds, setRowIds] = useState<GridSelectionModel>([]);
  const handleDeleteChecked = () => {
    rowIds.forEach((x) => deleteBooking(x.toString()));
    rowIds.forEach((x) => console.log(x.toString()));
  };
  const CustomFooter = () => {
    return (
      <GridFooterContainer>
        <Button
          onClick={handleDeleteChecked}
          sx={{
            ml: 1,
            bgcolor: " rgba(000000, 0, 0, 0.8);",
            ":hover": { bgcolor: "black ;" },
          }}
          variant="contained"
        >
          Ta bort markerade
        </Button>
        <GridFooter
          sx={{
            border: "none",
          }}
        />
      </GridFooterContainer>
    );
  };

  return (
    <div>
      <Typography component="div" variant="h6">
        Utförda Bokningar
      </Typography>
      <div className="completed-bookings">
        <DataGrid
          rows={completedBookings.map((x) => ({
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
          checkboxSelection
          components={{ Footer: CustomFooter }}
          onSelectionModelChange={(id) => {
            setRowIds(id);
          }}
        />
      </div>
    </div>
  );
};

export default CompletedBookings;
