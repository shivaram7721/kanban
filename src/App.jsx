
import './App.css'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Nav from './nav/Nav';

import { useState, useRef } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import List from "./component/list/list";
import { Card } from "./component/card/Card";
import Description from "./component/description/Description";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>


 

      <AddListButton onClick={() => setOpen(true)} />
      <Card />
      <Description />

    </>
  );
}

export default App;
