import { Dialog, DialogContent } from "@mui/material";
import { MdSubtitles } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrSort } from "react-icons/gr";
import TextField from "@mui/material/TextField";
import classes from "./Description.module.css";
import { useState } from "react";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import SubjectIcon from "@mui/icons-material/Subject";
import { Editor } from "@tinymce/tinymce-react";

export default function Description() {
  const [isDialog, setIsDialog] = useState(false);
  const [isComment, setComment] = useState(true);
  const [isWatch, setIsWatch] = useState(true);
  const [description, setDescription] = useState(true);
  const [content, setContent] = useState("");
  const [showContent, setShowContent] = useState(false);
  const handleEditorChange = (content) => {
    setContent(content);
  };
  const handleContent = () => {
    setShowContent(true);
    setDescription(true);
  };

  return (
    <div>
      <button onClick={() => setIsDialog(true)}>click me</button>
      <div className={classes.container}>
        <Dialog
          open={isDialog}
          PaperProps={{
            sx: {
              maxWidth: "70vw",
              width: 800,
              height: "90vh",
              // display: "Grid",
              // gridTemplateRows: "0.5fr 2fr 0.5",
            },
          }}
        >
          <DialogContent>
            <div className={classes.dialogTitle}>
              <div>
                <span>
                  <MdSubtitles />
                </span>
                <span>
                  <p>Cook Food</p>
                  <p>
                    in list{" "}
                    <span style={{ textDecoration: "underline" }}>To Do</span>
                  </p>
                </span>

                <ImCross onClick={() => setIsDialog(false)} />
              </div>
              <div>
                <p>Notifications</p>
                <span>
                  <button onClick={() => setIsWatch(!isWatch)}>
                    <AiOutlineEye />
                    {isWatch ? (
                      " Watch"
                    ) : (
                      <span>
                        Watching
                        <CheckBoxTwoToneIcon />
                      </span>
                    )}
                  </button>
                </span>
              </div>
              <div>
                <SubjectIcon />
                <p>Description</p>
                {description ? (
                  <button onClick={() => setDescription(false)}>
                    Add a more detailed description....
                  </button>
                ) : (
                  <>
                    <Editor
                      apiKey="<YOUR_API_KEY>"
                      value={content}
                      onEditorChange={handleEditorChange}
                    />
                    <span>
                      <button onClick={handleContent}>Submit</button>
                      <button onClick={() => setDescription(true)}>
                        Cancle
                      </button>
                    </span>
                  </>
                )}
                {showContent ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  ""
                )}
              </div>
              <div>
                <GrSort />
                <p>Activity</p>
                <button onClick={() => setComment(!isComment)}>
                  {isComment ? "Show Details" : "Hide Details"}
                </button>
              </div>
              <div>
                <CgProfile />
                <TextField
                  id="filled-basic"
                  label="Write a comment"
                  variant="filled"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
