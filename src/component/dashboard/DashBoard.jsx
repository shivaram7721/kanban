import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddListButton from "../button/addListButton/AddListButton";
import { List } from "../List/List";
import styles from "./DashBoard.module.css";
import TitleInput from "../list/titleInput/TitleInput";
import { dashBoardData } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import Nav from "../nav/Nav";

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

  function handleDragEnd(result) {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const newListData = Array.from(listData);
    const [draggedList] = newListData.splice(source.index, 1);
    newListData.splice(destination.index, 0, draggedList);

    setListData(newListData);
    console.log(newListData);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.dashBoardContainer}>
        <Nav />
        <div className={styles.horizontalContainer}>
          <Droppable droppableId="list" direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.listContainer}
              >
                {listData.map((ele, index) => (
                  <Draggable
                    key={ele.listId}
                    draggableId={ele.listId}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={styles.listItem}
                      >
                        <List
                          key={ele.listId}
                          title={ele.listTitle}
                          handleDelete={() => handleDeleteList(ele.listId)}
                          index={index}
                          listData={ele}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {open ? (
            <TitleInput
              onChange={(e) => setListName(e.target.value)}
              onClick={handleCreateList}
            />
          ) : (
            <AddListButton onClick={handleClick} />
          )}
        </div>
      </div>
    </DragDropContext>
  );
}
