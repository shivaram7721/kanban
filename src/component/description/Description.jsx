import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import classes from "./Description.module.css";
import { useState } from "react";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { dialogBox } from "../../atom/Atom";
import { useRecoilState } from "recoil";
import Comment from "./comment/Comment";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useState(true);

  const clickHandler = () => {
    setIsDialog(false);
  };

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
              <span>
                <Comment />
              </span>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
