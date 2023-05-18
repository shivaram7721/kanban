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
import { dashBoardData } from "../../atom/Atom";
import { Droppable } from "react-beautiful-dnd";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { dialogBox, TaskList, listIndex } from "../../atom/Atom";
import { useSetRecoilState } from "recoil";

export function List({ title, handleDelete, index, listData, datas }) {
  const { listId } = listData;
  const [show, setShow] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [data, setData] = useRecoilState(dashBoardData);

  const [listName, setListName] = useState("");

  const setIsDialog = useSetRecoilState(dialogBox);
  const setCardDetail = useSetRecoilState(TaskList);
  const setIndex = useSetRecoilState(listIndex);

  function clickHandler(data1) {
    setIsDialog(true);
    setCardDetail(data1);
    setIndex(index);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleAdd() {
    setShow(!show);
  }

  function handleTitleEdit() {
    if (!listName) {
      return;
    }
    const temp = { ...data[index] };
    const update = [...data];
    temp.listTitle = listName;
    update[index] = temp;
    setData(update);
    setIsEdit(false);
  }

  // functions for card CRUD
  function handleCardDelete(cardId) {
    const tempList = { ...data[index] };
    const x = tempList.cards;
    const filteredCardData = x.filter((ele) => ele.cardId != cardId);
    tempList.cards = filteredCardData;
    const finalData = [...data];
    finalData[index] = tempList;
    setData(finalData);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.titleContainer}>
        {isEdit ? (
          <span>
            <input
              onChange={(e) => setListName(e.target.value)}
              className={styles.title__input}
            />
            <button className={styles.title__saveBtn} onClick={handleTitleEdit}>
              save
            </button>
          </span>
        ) : (
          <p
            onClick={() => setIsEdit(true)}
            className={styles.cardTitle}
            // onChange={handleTitle}
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
        <Droppable droppableId={listId} type="cards">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {datas &&
                datas[index].cards.map((ele, index) => (
                  <CardItem
                    cardData={ele}
                    index={index}
                    key={index}
                    clickHandler={() => clickHandler(ele)}
                    handleCardDelete={() => handleCardDelete(ele.cardId)}
                    listIndex={index}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

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
