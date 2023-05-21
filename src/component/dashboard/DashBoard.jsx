import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddListButton from "../button/addListButton/AddListButton";
import { List } from "../List/List";
import styles from "./DashBoard.module.css";
// import TitleInput from "../list/titleInput/TitleInput";
import TitleInput from "../List/titleInput/TitleInput";
import { dashBoardData, dragListIndex } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import Nav from "../nav/Nav";
import Description from "../description/Description";
import { setLocalData } from "../../Utils";

const data = [
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/827/65/320/firewatch-4k-best-wallpaper-e8f69da8c0b09c9880fc110ec8d2940a.jpg",
  },
  {
    image:
      "https://c0.wallpaperflare.com/path/76/943/601/4k-wallpaper-architecture-background-black-d7c782b4ff9642e1d5b8d059953aec1b.jpg",
  },
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-08165d58e0100cf8e0ec214e88e2e4aa.jpg",
  },
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/285/172/9/sunset-8k-forest-4k-wallpaper-f3fbc3fd7d29db258fb6527708db28e8.jpg",
  },
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/824/766/324/nebula-4k-teal-turquoise-wallpaper-032b333ddd19ab25df069207c82bc838.jpg",
  },
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/444/19/627/sunrise-annapurna-massif-himalayas-minimal-wallpaper-28d62d6860d03c28a04c618e3892b4ba.jpg",
  },
  {
    image:
      "https://r4.wallpaperflare.com/wallpaper/860/945/126/romantic-couple-4k-pics-ultra-hd-wallpaper-2bf62c5d53e1fff945142b096d3cac10.jpg",
  },
];

export default function DashBoard() {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");
  const [img, setImg] = useState(0);

  const [dragIndex, setDragIndex] = useRecoilState(dragListIndex);
  console.log(dragIndex);

  function handleClick() {
    setOpen(true);
  }

  function handleDeleteList(listId) {
    const tempData = [...listData];
    const filterData = tempData.filter((ele) => ele.listId != listId);
    setListData(filterData);
    setLocalData(filterData);
  }

  function handleCreateList() {
    if (!listName) {
      return;
    }
    const newListItem = {
      listId: uuidv4(),
      listTitle: listName,
      cards: [],
      createdAt: new Date().toLocaleString(),
      activity: [],
    };
    const tempData = [...listData, newListItem];
    setListData(tempData);
    setLocalData(tempData);
    setOpen(false);
    setListName("");
  }

  function changeImg() {
    setImg(img + 1);
    if (img === data.length - 1) {
      setImg(0);
    }
  }

  function handleDragEnd(result) {
    function findListById(listId) {
      return listData.findIndex((list) => list.listId === listId);
    }

    if (result.type === "cards") {
      const { source, destination } = result;
      console.log(result);

      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const index = findListById(source.droppableId);

        const sourceList = listData[index].cards;

        // const newSourceCards = Array.from(sourceList);
        const newSourceCards = [...sourceList];
        const [reorderedCard] = newSourceCards.splice(source.index, 1);
        newSourceCards.splice(destination.index, 0, reorderedCard);

        const updated = { ...listData[index], cards: newSourceCards };
        const final = [...listData];
        final[index] = updated;

        setListData(final);

        setLocalData(final);
      } else {
        const sourceIndex = findListById(source.droppableId);
        const destinationIndex = findListById(destination.droppableId);

        const sourceCards = listData[sourceIndex].cards;
        const destinationCards = listData[destinationIndex].cards;

        const newSourceCards = [...sourceCards];
        const newDestinationCards = [...destinationCards];

        const [draggedCard] = newSourceCards.splice(source.index, 1);
        newDestinationCards.splice(destination.index, 0, draggedCard);

        const updatedSource = {
          ...listData[sourceIndex],
          cards: newSourceCards,
        };
        const updatedDestination = {
          ...listData[destinationIndex],
          cards: newDestinationCards,
        };

        const updatedListData = [...listData];
        updatedListData[sourceIndex] = updatedSource;
        updatedListData[destinationIndex] = updatedDestination;

        setListData(updatedListData);
        setLocalData(updatedListData);
      }
    }

    if (result.type === "list") {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      // const newListData = Array.from(listData);
      const newListData = [...listData];
      const [draggedList] = newListData.splice(source.index, 1);
      newListData.splice(destination.index, 0, draggedList);

      setListData(newListData);
      setLocalData(newListData);
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd} Combine={true}>
      <div
        className={styles.dashBoardContainer}
        style={{
          backgroundImage: `url(${data[img].image})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "3s",
        }}
      >
        <Nav changeImg={changeImg} />
        <div className={styles.horizontalContainer}>
          <Droppable droppableId="list" direction="horizontal" type="list">
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
                          datas={listData}
                          handleDragIndex={() => setDragIndex(index)}
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
              setOpen={setOpen}
            />
          ) : (
            <AddListButton onClick={handleClick} />
          )}
        </div>
      </div>
      <Description />
    </DragDropContext>
  );
}
