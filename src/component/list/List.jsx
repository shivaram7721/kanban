import { Paper } from "@mui/material";
import React from "react";
import TaskCard from "../taskCard/TaskCard";

export default function List() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 2,
          width: "18rem",
          height: "15rem",
          bgcolor: "#f1f2f4",
        }}
      >
        <div style={{ margin: "10px" }}>Todo</div>
        <TaskCard />
        <TaskCard />
      </Paper>
    </>
  );
}
