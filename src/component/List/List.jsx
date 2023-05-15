import styles from "./List.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { TbTemplate } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { CardInput } from "../cards/cardInput/CardInput";
import { CardList } from "../cards/cardList/CardList";
import { useRecoilState } from "recoil";
import { addCards, dashBoardData } from "../../atom/Atom";
import { DragDropContext } from "react-beautiful-dnd";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export function List({ title, handleDelete, index }) {
  const [show, setShow] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const [cards, setcards] = useRecoilState(addCards);
  const [data, setData] = useRecoilState(dashBoardData);
  const [listName, setListName] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

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

  function handleTitleSave() {
    const temp = { ...data[index] };
    const update = [...data];
    temp.listTitle = listName;
    update[index] = temp;
    setData(update);
    setIsEdit(false);
  }

  return (
    <div className={styles.cardContainer}>
      <DragDropContext onDragEnd={handleDrag}>
        <div className={styles.titleContainer}>
          {isEdit ? (
            <span>
              <input onChange={(e) => setListName(e.target.value)} />
              <button onClick={handleTitleSave}>save</button>
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
          <CardList />
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
        <CardInput show={handleAdd} />
      )}
    </div>
  );
}
