import "./App.css";
import { useState } from "react";
import "./App.css";
import AddListButton from "./component/button/addListButton/AddListButton";
import { Card } from "./component/card/Card";
import Description from "./component/description/Description";
import TitleInput from "./component/titleInput/TitleInput";
import { dashBoardData } from "./atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import Nav from "./component/nav/Nav";

function App() {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");
  const [currIndex, setCurrIndex] = useState(null);

  function handleClick() {
    setOpen(true);
  }

  function handleDeleteList(index) {
    // console.log("index" + index);
    const tempData = [...listData];
    const filterData = tempData.filter((ele, idx) => idx != index);
    setListData([...filterData]);
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
    setOpen(false);
  }

  return (
    <div>
      <Nav />
      <div style={{ display: "flex", gap: "2rem" }}>
        {listData.map((ele, index) => (
          <Card
            title={ele.title}
            handleDelete={() => handleDeleteList(index)}
            index={index}
          />
        ))}

        {open ? (
          <TitleInput
            onChange={(e) => setListName(e.target.value)}
            onClick={handleCreateList}
          />
        ) : (
          <AddListButton onClick={handleClick} />
        )}
        {/* <Route path */}
        <Description />
      </div>
    </div>
  );
}

export default App;
