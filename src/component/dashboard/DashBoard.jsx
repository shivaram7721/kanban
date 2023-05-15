import { useState } from "react";
import AddListButton from "../button/addListButton/AddListButton";
import { List } from "../List/List";
import Description from "../description/Description";
import TitleInput from "../titleInput/TitleInput";
import { dashBoardData } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import Nav from "../nav/Nav";

export default function DashBoard() {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");
  const [currIndex, setCurrIndex] = useState(null);

  function handleClick() {
    setOpen(true);
  }

  function handleDeleteList(index) {
    const tempData = [...listData];
    const filterData = tempData.filter((ele, idx) => idx != index);
    setListData([...filterData]);
  }

  function handleCreateList() {
    const newListItem = {
      listId: uuidv4(),
      listTitle: listName,
      cards: [],
      createdAt: Date.now(),
      activity: [],
    };
    const tempData = [...listData, newListItem];
    setListData([...tempData]);
    setOpen(false);
  }
  return (
    <div>
      <Nav />
      <div style={{ display: "flex", gap: "2rem" }}>
        {listData.map((ele, index) => (
          <List
            key={index}
            title={ele.listTitle}
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
