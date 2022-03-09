import * as React from "react";
import { DataGrid, GridLinkOperator } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const rows = [
  {
    proponent: "Diamond",
    amount: 20000,
    completedProposals: 2,
    turnover: 100300,
    experience: 3,
    id: 1,
  },
  {
    proponent: "Luna",
    amount: 120000,
    completedProposals: 2,
    turnover: 400000,
    experience: 7,
    id: 2,
  },
  {
    proponent: "Hailie",
    amount: 100000,
    completedProposals: 5,
    turnover: 10000,
    experience: 2,
    id: 3,
  },
  {
    proponent: "Alexis Rowe",
    amount: 500000,
    completedProposals: 9,
    turnover: 1550000,
    experience: 12,
    id: 4,
  },
];

const columns = [
  { field: "proponent", headerName: "Proponent", width: 200, type: "text" },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 200,
  },
  {
    field: "completedProposals",
    headerName: "Completed Proposals",
    type: "number",
    width: 200,
  },
  {
    field: "turnover",
    headerName: "Turnover (3yrs)",
    type: "number",
    width: 200,
  },
  {
    field: "experience",
    headerName: "Experience",
    type: "number",
    width: 200,
  },
];

// const getTreeDataPath = (row) => row.hierarchy;

export default function ExpandableCard2() {
  //   const [filterModel, setFilterModel] = React.useState({
  //     linkOperator: GridLinkOperator.Or,
  //     items: [
  //       {
  //         id: 0,
  //         columnField: "amount",
  //         operatorValue: "before",
  //         value: "2018-01-01",
  //       },
  //     ],
  //   }
  //   );

  return (
    <Stack style={{ width: "100%" }} alignItems="center" spacing={2}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          treeData
          rows={rows}
          columns={columns}
          //   getTreeDataPath={getTreeDataPath}
          //   filterModel={filterModel}
          //   onFilterModelChange={setFilterModel}
          defaultGroupingExpansionDepth={1}
        />
      </div>
    </Stack>
  );
}
