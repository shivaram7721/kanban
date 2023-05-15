/* eslint-disable react/prop-types */
import Paper from "@mui/material/Paper";

export default function TaskCard({ taskTitle, onClick }) {
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
      onClick={onClick}
    >
      {taskTitle}
    </Paper>
  );
}
