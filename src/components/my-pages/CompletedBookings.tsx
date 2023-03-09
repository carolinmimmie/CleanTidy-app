import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridFooter,
  GridFooterContainer,
  GridSelectionModel,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { IBooking } from "./interfaces";
import { Button } from "@mui/material";
import Footer from "../Footer";
import { useState } from "react";

interface ICompletedBookings {
  completedBookings: IBooking[];
  deleteBooking: (id: string) => Promise<void>;
}

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

const CompletedBookings = ({
  completedBookings,
  deleteBooking,
}: ICompletedBookings) => {
  const [rowIds, setRowIds] = useState<GridSelectionModel>([]);
  const handleDeleteChecked = () => {
    // deleteBooking(rowIds.toString());
    console.log(rowIds);

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
    <div style={{ height: 400, width: 555 }}>
      <Typography component="div" variant="h6">
        Utförda Bokningar
      </Typography>
      <DataGrid
        rows={completedBookings.map((x) => ({
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
        onSelectionModelChange={(id) => {
          setRowIds(id);
          console.log(id);
        }}
      />
    </div>
  );
};

export default CompletedBookings;
