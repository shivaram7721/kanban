import styles from "./CardList.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { addCards } from "../../../atom/Atom";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { dialogBox } from "../../../atom/Atom";
// import { AiOutlineEye } from "react-icons/ai";
// import { FaRegComment } from "react-icons/fa";

export function CardList({ title }) {
  const cards = useRecoilValue(addCards);
  // const setIsWatch = useSetRecoilState(watchNotification);
  const setList = useSetRecoilState(TaskList);

  return (
    <div>
      <Droppable droppableId="todo" type="cards">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {cards &&
              cards.map((card, index) => (
                <Draggable draggableId={card.id} key={card.id} index={index}>
                  {(provided) => (
                    <div
                      className={styles.card}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <span>
                        <Link to={`?id=${card.id}`} className={styles.link}>
                          <p key={card.id}>{card.card}</p>
                        </Link>
                      </span>
                      {/* <span className={styles.div}>
                        <AiOutlineEye onClick={() => setIsWatch(false)} />
                        <FaRegComment />
                      </span> */}
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
