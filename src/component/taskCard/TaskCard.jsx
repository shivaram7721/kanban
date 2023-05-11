import React from "react";
import Paper from "@mui/material/Paper";

export default function TaskCard({ taskTitle }) {
  return (
    <Paper
      elevation={1}
      sx={{
        height: 22,
        p: 1,
        m: 1,
        borderRadius: 2,
        cursor: "pointer",
        "&:hover": { bgcolor: "#f1f2f4" },
      }}
    >
      {taskTitle}
    </Paper>
  );
}
