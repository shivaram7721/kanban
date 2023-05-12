import "./App.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import Nav from "./component/nav/Nav";

import { useState, useRef } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import { Card } from "./component/card/Card";
import Description from "./component/description/Description";
import { dashboard } from "./data";
import { CardInput } from "./component/cardInput/CardInput";
import TitleInput from "./component/titleInput/TitleInput";
import { dashBoardData } from "./atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");

  function handleClick() {
    setOpen(true);
  }

  function handleCreateList() {
    const newListItem = {
      id: uuidv4(),
      title: listName,
      cardList: [],
      createdAt: Date.now(),
      activity: [],
    };
    // console.log(newListItem);
    const tempData = [...listData, newListItem];
    setListData([...tempData]);
  }

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* <Card /> */}
      {listData.map((ele) => (
        <Card title={ele.title} />
      ))}
      {open ? (
        <TitleInput
          onChange={(e) => setListName(e.target.value)}
          onClick={handleCreateList}
        />
      ) : (
        <AddListButton onClick={handleClick} />
      )}
      <Description />
    </div>
  );
}

export default App;
