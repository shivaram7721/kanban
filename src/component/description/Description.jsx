import { Dialog, DialogContent } from "@mui/material";
import { AiOutlineEye } from "react-icons/ai";
import { dialogBox, watchNotification } from "../../atom/Atom";
import classes from "./Description.module.css";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";
import Title from "./title/Title";
import Content from "./content/Content";
import Activity from "./acitivity/Activity";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import Comment from "./comment/Comment";
import { isCardDetail, dashBoardData, listIndex } from "../../atom/Atom";
import { CgProfile } from "react-icons/cg";

export default function Description() {
  const [isDialog, setIsDialog] = useRecoilState(dialogBox);
  const [isWatch, setIsWatch] = useRecoilState(watchNotification);
  const [isComment, setComment] = useRecoilState(isCardDetail);
  // const setIsTitle = useSetRecoilState(isShowTitle);
  const cardData = useRecoilValue(dashBoardData);
  const index = useRecoilValue(listIndex);
  const navigate = useNavigate();

  const closeDialogHandle = () => {
    setIsDialog(false);
    navigate("/");
  };

  const showCardDetail = () => {
    setComment(!isComment);
  };

  // const ChangeTitle = () => {
  //   setIsTitle(false);
  // };

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
              // overflow: "scroll",
              // marginBottom: "3rem",
            },
          }}
        >
          <DialogContent>
            <div className={classes.DialogContent}>
              <Title
                clickHandler={closeDialogHandle}
                // ChangeTitle={ChangeTitle}
              />
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
                <Activity
                  showCardDetail={showCardDetail}
                  isComment={isComment}
                />
              </span>
              <span>
                <Comment />
              </span>
              {isComment ? (
                ""
              ) : (
                <span className={classes.div2}>
                  <CgProfile className={classes.icons} />
                  <span className={classes.container5}>
                    <p>user added this card to {cardData[index].listTitle}</p>
                    {cardData[index].createdAt}
                  </span>
                </span>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
