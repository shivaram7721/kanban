import { useState, useRef } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import { Card } from "./component/card/Card";
import Description from "./component/description/Description";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1>Kanban board</h1>
      <AddListButton onClick={() => setOpen(true)} />
      <Card />
      <Description />
    </>
  );
}

export default App;
