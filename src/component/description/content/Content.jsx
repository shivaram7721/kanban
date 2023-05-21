import { useState } from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import { Editor } from "@tinymce/tinymce-react";
import style from "./Content.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { TaskList, listIndex, dashBoardData } from "../../../atom/Atom";
import { setLocalData } from "../../../Utils";

export default function Content() {
  const [description, setDescription] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [cardData, setCardData] = useRecoilState(dashBoardData);
  const index = useRecoilValue(listIndex);
  const [updateList, setUpdateList] = useRecoilState(TaskList);
  const [content, setContent] = useState(updateList.description);

  console.log(updateList.description);

  const handleEditorChange = (content) => {
    setContent(content);
  };

  const handleContent = () => {
    setShowContent(true);
    const id = updateList.cardId;
    setDescription(true);

    const updatedCardData = [...cardData]; // Create a copy of cardData

    const updateDescription = [...updatedCardData[index].cards]; // Create a copy of the cards array for the specified index

    const cardIndex = updateDescription.findIndex((card) => card.cardId === id); // Find the index of the card to update

    if (cardIndex !== -1) {
      console.log(content);
      updateDescription[cardIndex] = {
        ...updateDescription[cardIndex],
        description: content,
      };
    }

    updatedCardData[index] = {
      ...updatedCardData[index],
      cards: updateDescription,
    };

    setCardData(updatedCardData);
    setLocalData(updatedCardData);

    console.log("new data ", cardData);
    setUpdateList((prevTitle) => {
      console.log(prevTitle);
      const updatedTitle = { ...prevTitle, description: content };
      return updatedTitle;
    });
  };
  return (
    <div>
      <span className={style.container3}>
        <SubjectIcon sx={{ fontSize: "1.8rem" }} />
        <p className={style.para2} style={{ margin: "2px 0 10px 1.4rem" }}>
          Description
        </p>
      </span>
      {description ? (
        <div onClick={() => setDescription(false)} className={style.contentBtn}>
          {updateList.description !== "" || showContent === true ? (
            <span className={style.innerDiv}>
              <div
                style={{ paddingLeft: "3rem" }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <button className={style.btn3}>edit </button>
            </span>
          ) : (
            <button
              style={{
                padding: "0.8rem 1.5rem 1rem",
                width: "75%",
                display: "flex",
                justifyContent: "flex-start",
                margin: "0 0 1rem 3rem",
              }}
            >
              Add a more detailed description....
            </button>
          )}
        </div>
      ) : (
        <>
          <Editor
            apiKey="<YOUR_API_KEY>"
            value={content}
            onEditorChange={handleEditorChange}
          />
          <span>
            <button
              className={style.btn2}
              onClick={handleContent}
              style={{ backgroundColor: "blue", color: "white" }}
            >
              Submit
            </button>
            <button className={style.btn2} onClick={() => setDescription(true)}>
              Cancel
            </button>
          </span>
        </>
      )}
    </div>
  );
}
