/* eslint-disable react/prop-types */
import styles from "./List.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { TbTemplate } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { CardInput } from "../cards/cardInput/CardInput";
import { CardItem } from "../cards/cardItem/CardItem";
import { useRecoilState } from "recoil";
import { addCards, dashBoardData } from "../../atom/Atom";
import { DragDropContext } from "react-beautiful-dnd";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { dialogBox, TaskList } from "../../atom/Atom";
import { useSetRecoilState } from "recoil";

export function List({ title, handleDelete, index, listData }) {
  const { listId } = listData;
  const [show, setShow] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const [cards, setcards] = useRecoilState(addCards);
  const [data, setData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");

  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const setCardDetail = useSetRecoilState(TaskList);

  function clickHandler(data) {
    setIsDialog(true);
    setCardDetail(data);
    console.log(data);
    console.log(isDialog);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  console.log(data);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleTitle(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    setShow(!show);
  }

  function handleDrag(result) {
    console.log(result);

    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      source.destinationId === destination.destinationId &&
      source.index === destination.index
    ) {
      return;
    }

    const newCards = Array.from(cards);
    const [reOrderedCards] = newCards.splice(result.source.index, 1);
    newCards.splice(result.destination.index, 0, reOrderedCards);

    setcards(newCards);
  }

  function handleTitleEdit() {
    const temp = { ...data[index] };
    const update = [...data];
    temp.listTitle = listName;
    update[index] = temp;
    setData(update);
    setIsEdit(false);
  }

  // functions for card CRUD
  function handleCardDelete(cardId) {
    const found = data.find((ele) => ele.listId == listId);
    console.log("found" + found);
    // const temp = [...data[index].cards];
    // console.log("index is " + index);
    // const filteredData = temp.filter((ele) => ele.cardId != cardId);
    // setData(filteredData);
  }

  return (
    <div className={styles.cardContainer}>
      <DragDropContext onDragEnd={handleDrag}>
        <div className={styles.titleContainer}>
          {isEdit ? (
            <span>
              <input onChange={(e) => setListName(e.target.value)} />
              <button onClick={handleTitleEdit}>save</button>
            </span>
          ) : (
            <p
              onClick={() => setIsEdit(true)}
              className={styles.cardTitle}
              onChange={handleTitle}
            >
              {title}
            </p>
          )}

          <div>
            <HiOutlineDotsHorizontal
              className={styles.dotsIcon}
              aria-describedby={id}
              onClick={handleClick}
            />

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography
                onClick={handleDelete}
                sx={{ p: 1, width: "10rem", cursor: "pointer" }}
              >
                Delete List
              </Typography>
            </Popover>
          </div>
        </div>

        <div>
          {/* map here for card data*/}
          {data &&
            data[index].cards.map((ele, index) => (
              <>
                <CardItem
                  cardData={ele}
                  index={index}
                  key={ele.cardId}
                  clickHandler={() => clickHandler(ele)}
                  handleCardDelete={() => handleCardDelete(ele.cardId)}
                />
              </>
              // <p>{ele.cardTitle}</p>
            ))}
        </div>
      </DragDropContext>

      {show ? (
        <div className={styles.addCardBtn}>
          <div onClick={handleAdd} className={styles.cardBtn}>
            <IoMdAdd className={styles.addIcon} />
            <p className={styles.addBtn}>Add a card</p>
          </div>
          <Tooltip title="create from template">
            <div className={styles.templateBtn}>
              <TbTemplate />
            </div>
          </Tooltip>
        </div>
      ) : (
        <CardInput show={handleAdd} index={index} />
      )}
    </div>
  );
}
