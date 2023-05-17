<<<<<<< Updated upstream
import "./App.css";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./component/dashboard/DashBoard";
=======
import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Nav from "./nav/Nav";
import { useState, useRef } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import { Card } from "./component/card/Card";
>>>>>>> Stashed changes
import Description from "./component/description/Description";

function App() {
  return (
<<<<<<< Updated upstream
    <Routes>
      <Route path={"/"} element={<DashBoard />}></Route>
    </Routes>
=======
    <>
      <Nav />
      <AddListButton onClick={() => setOpen(true)} />
      <Card />
      <Description />
    </>
>>>>>>> Stashed changes
  );
}

export default App;
