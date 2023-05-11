import { useState, useRef } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import Description from "./component/description/Description";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Kanban board</h1>
      <AddListButton onClick={() => setOpen(true)} />
      <Description />
    </>
  );
}

export default App;
