import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import classes from "./Description.module.css";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Comment from "./comment/Comment";
import {
  isCardDetail,
  dashBoardData,
  listIndex,
  dialogBox,
  watchNotification,
  TaskList,
} from "../../atom/Atom";
import { CgProfile } from "react-icons/cg";
import { useRef, useState } from "react";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useRecoilState(watchNotification);
  const [isComment, setComment] = useRecoilState(isCardDetail);
  const listData = useRecoilValue(dashBoardData);
  const card = useRecoilValue(TaskList);
  const index = useRecoilValue(listIndex);
  const navigate = useNavigate();
  const prevChangesRef = useRef(listData[index]?.listTitle);

  const closeDialogHandle = () => {
    setIsDialog(false);
    navigate("/");
  };

  // console.log("dashboard index ", listData[index].listTitle);

  const activityData = {
    changes: listData[index]?.listTitle,
    changesAt: card?.createdAt || new Date().toLocaleString(),
  };
  const [activity, setActivity] = useState([activityData]);

  console.log(prevChangesRef.current);

  console.log(activityData);

  if (activityData.changes !== prevChangesRef.current) {
    activityData.changesAt = new Date().toLocaleString();
    prevChangesRef.current = activityData.changes;
    setActivity([activityData]);
  }

  console.log(activityData);

  const showCardDetail = () => {
    setComment(!isComment);
  };

  console.log(listData[index]);

  return (
    <div>
      <div className={classes.container}>
        <Dialog
          open={isDialog}
          PaperProps={{
            sx: {
              maxWidth: "70vw",
              width: 800,
              minHeight: "90vh",
              backgroundColor: "whitesmoke",
              overflow: "auto",
            },
          }}
        >
          <DialogContent>
            <div className={classes.DialogContent}>
              <Title clickHandler={closeDialogHandle} />
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
              <Content />
              <Activity showCardDetail={showCardDetail} isComment={isComment} />
              <Comment />
              {isComment ? (
                ""
              ) : (
                <div className={classes.div2}>
                  <CgProfile className={classes.icons} />
                  <span className={classes.container5}>
                    {activity.map((ele, index) => (
                      <span key={index}>
                        <p>user added this card to {ele.changes}</p>
                        {ele.changesAt}
                      </span>
                    ))}
                  </span>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}