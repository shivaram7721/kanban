import { useState } from "react";
import AddListButton from "../button/addListButton/AddListButton";
import { List } from "../List/List";
import TitleInput from "../list/titleInput/TitleInput";
import { dashBoardData } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import Nav from "../nav/Nav";
import style from "./DashBoard.module.css";
import Description from "../description/Description";

export default function DashBoard() {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");

  function handleClick() {
    setOpen(true);
  }

  function handleDeleteList(listId) {
    const tempData = [...listData];
    const filterData = tempData.filter((ele) => ele.listId != listId);
    setListData(filterData);
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
    setListData(tempData);
    setOpen(false);
  }
  return (
    <div>
      <Nav />
      <div className={style.mainDiv}>
        {listData.map((ele, index) => (
          <List
            key={ele.listId}
            title={ele.listTitle}
            handleDelete={() => handleDeleteList(ele.listId)}
            index={index}
            listData={ele}
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
      </div>
      <Description />
    </div>
  );
}
