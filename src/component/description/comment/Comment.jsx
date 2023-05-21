import { Editor } from "@tinymce/tinymce-react";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import style from "./Comment.module.css";

function Comment() {
  const [isEditorView, setIsEditorView] = useState(false);
  const [content2, setContent2] = useState("");
  const [comment, setComment] = useState([]);

  const now = new Date();
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = now.toLocaleString("en-US", options);
  const editorConfig = {
    height: 200,
  };
  const handleEditorChange2 = (content) => {
    setContent2(content);
  };
  const visibleHandler = () => {
    setIsEditorView(false);
    setComment([...comment, { text: content2, time: formattedTime }]);
    setContent2("");
  };
  console.log(comment);

  const deleteComment = (id) => {
    setComment(comment.filter((ele, index) => index !== id));
  };

  return (
    <div className={style.container3}>
      <CgProfile style={{ fontSize: "1.7rem" }} />
      {isEditorView ? (
        <span>
          <Editor
            apiKey="<YOUR_API_KEY>"
            value={content2}
            onEditorChange={handleEditorChange2}
            init={editorConfig}
          />
          <button
            style={{
              margin: "0.5rem 0 1.5rem",
              width: "5rem",
              height: "2rem",
              background: "blue",
              color: "white",
            }}
            onClick={visibleHandler}
          >
            Save
          </button>
        </span>
      ) : (
        <span className={style.div2}>
          <input
            placeholder="Write a Comment..."
            className={style.input}
            onClick={() => setIsEditorView(true)}
          />
          <>
            {comment.map((ele, index) => (
              <div key={index} className={style.div4}>
                <span className={style.Innerdiv}>
                  <button
                    className={style.button1}
                    dangerouslySetInnerHTML={{ __html: ele.text }}
                  />

                  <ul className={style.div3}>
                    <li onClick={() => deleteComment(index)}>Delete</li>
                  </ul>
                </span>
                <p>{ele.time}</p>
              </div>
            ))}
          </>
          {/* )} */}
        </span>
      )}
    </div>
  );
}

export default Comment;
