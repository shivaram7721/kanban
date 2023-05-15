import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import classes from "./Description.module.css";
import { useState } from "react";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import { Editor } from "@tinymce/tinymce-react";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { dialogBox } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useState(true);
  const [isEditorView, setIsEditorView] = useState(false);
  const [content2, setContent2] = useState("");
  const [comment, setComment] = useState([]);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const editorConfig = {
    height: 200,
  };
  const handleEditorChange2 = (content) => {
    setContent2(content);
  };
  const visibleHandler = () => {
    setIsEditorView(false);
    setComment([...comment, { text: content2 }]);
    setContent2("");
  };
  // console.log(comment);
  const clickHandler = () => {
    setIsDialog(false);
    navigate("/");
  };
  const deleteComment = (id) => {
    setComment(comment.filter((ele, index) => index !== id));
  };

  function editComment(id) {
    const update = comment.find((ele, index) => index === id);
    setContent2(update);
    setEdit(true);
    console.log(content2);
  }
  return (
    <div>
      {/* <button onClick={() => setIsDialog(true)}>click me</button> */}
      <div className={classes.container}>
        <Dialog
          open={isDialog}
          PaperProps={{
            sx: {
              maxWidth: "70vw",
              width: 800,
              height: "90vh",
              backgroundColor: "whitesmoke",
            },
          }}
        >
          <DialogContent>
            <div className={classes.DialogContent}>
              <Title clickHandler={clickHandler} />
              <div className={classes.container2}>
                <p style={{ margin: 0, paddingBottom: "0.5rem" }}>
                  Notifications
                </p>

                <button onClick={() => setIsWatch(!isWatch)}>
                  <span className={classes.btn1}>
                    <AiOutlineEye />
                    <span style={{ display: "flex", gap: "5px" }}>
                      {isWatch ? (
                        <span
                          style={{
                            fontSize: "0.9rem",
                            marginTop: "0.3rem",
                            paddingRight: "0.8rem",
                          }}
                        >
                          Watch
                        </span>
                      ) : (
                        <>
                          <span
                            style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}
                          >
                            Watching
                          </span>
                          <CheckBoxTwoToneIcon
                            onClick={() => setIsWatch(true)}
                            sx={{ fontSize: "2rem", padding: 0 }}
                          />
                        </>
                      )}
                    </span>
                  </span>
                </button>
              </div>
              <span>
                <Content />
              </span>
              <span>
                <Activity />
              </span>
              <div className={classes.container3}>
                <CgProfile style={{ fontSize: "1.7rem" }} />
                {isEditorView ? (
                  <span style={{ height: "10rem" }}>
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
                  <span className={classes.div2}>
                    <input
                      placeholder="Write a Comment..."
                      className={classes.input}
                      onClick={() => setIsEditorView(true)}
                    />
                    {comment.map((ele, index) => (
                      <div key={index}>
                        <span>
                          <button
                            className={classes.button1}
                            dangerouslySetInnerHTML={{ __html: ele.text }}
                          />
                          <ul className={classes.div3}>
                            <li onClick={() => editComment(index)}>Edit</li>
                            <li onClick={() => deleteComment(index)}>Delete</li>
                          </ul>
                        </span>
                      </div>
                    ))}
                  </span>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
