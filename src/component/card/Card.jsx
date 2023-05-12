import styles from "./Card.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
// import AddListButton from '../button/addListButton/AddListButton';
import { IoMdAdd } from "react-icons/io";
import { TbTemplate } from "react-icons/tb";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { CardInput } from "../cardInput/CardInput";
import { CardList } from "../cardList/CardList";
import { useRecoilState } from "recoil";
import { addCards } from "../../atom/Atom";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';


export function Card() {

    const [input, setInput] = useState('add Title');
    const [show, setShow] = useState(true);

    const [cards, setcards] = useRecoilState(addCards)

    function handleTitle(e) {
        setInput(e.target.value);
    }
    console.log(input)

    function handleAdd() {
      setShow(!show)
    }

    function handleDrag(result) {
      console.log(result);

      const {source, destination} = result;

      if(!destination){
        return;
      }

      if(source.destinationId === destination.destinationId && source.index === destination.index) {
        return;
      }

      const newCards = Array.from(cards);
      const [reOrderedCards] = newCards.splice(result.source.index, 1);
      newCards.splice(result.destination.index, 0, reOrderedCards);

      setcards(newCards);
    }


  return (
    <div className={styles.cardContainer}>
      <DragDropContext onDragEnd={handleDrag}>
      <div className={styles.titleContainer}>
        <p className={styles.cardTitle} onChange={handleTitle} >{input}</p>
        <HiOutlineDotsHorizontal className={styles.dotsIcon}/>
      </div>
      
      <div>
        <CardList />
      </div>

      </DragDropContext>

      {
        show ? (
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
        ) : <CardInput show={handleAdd}/>
      }

      {/* <CardInput /> */}
    </div>
  );
}
