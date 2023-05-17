import { useState } from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import { Editor } from "@tinymce/tinymce-react";
import style from "./Content.module.css";
import { useRecoilState } from "recoil";
import { TaskList } from "../../../atom/Atom";

export default function Content() {
  const [description, setDescription] = useState(true);
  const [content, setContent] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [updateList, SetUpdateList] = useRecoilState(TaskList);

  console.log(updateList);

  const handleEditorChange = (content) => {
    setContent(content);
  };
  const handleContent = () => {
    setShowContent(true);
    setDescription(true);
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
        <div onClick={() => setDescription(false)}>
          {showContent ? (
            <button>edit </button>
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
              Cancle
            </button>
          </span>
        </>
      )}
      {showContent ? (
        <div
          style={{ paddingLeft: "3rem" }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        ""
      )}
    </div>
  );
}
