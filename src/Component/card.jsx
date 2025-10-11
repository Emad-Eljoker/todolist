import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Mission from "./mession";
import GroudBTN from "./groudBTN";
import Addtask from "./addTask";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "./context/context";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function MyCard() {

  const [openDeleteAll, setOpenDeleteAll] = useState(false);

  const { task, setTask } = useContext(TaskContext);
  const [input, setInput] = useState("");

  const [TaskState, setTaskState] = useState("all");

  const Completed = task.filter((t) => {
  
    return t.isCompleted
  });

  const notCompleted = task.filter((t) => !t.isCompleted);

  let taskWillbeRender = task;
  if (TaskState === "completed") {
    taskWillbeRender = Completed;
  } else if (TaskState === "not-completed") {
    taskWillbeRender = notCompleted;
  } else {
    taskWillbeRender = task;
  }

  const taskList = taskWillbeRender.map((t) => <Mission key={t.id} t={t} />);

  const handleOpenDeleteAll = () => {
    setOpenDeleteAll(true);
  };

  const handleCloseDeleteAll = () => {
    setOpenDeleteAll(false);
  };

  function handelAddTask() {
    let newtask = {
      id: uuidv4(),
      title: input,
      description: "",
      isCompleted: false,
    };
    const taskUpdate = [...task, newtask];
    setTask(taskUpdate);
    localStorage.setItem("task", JSON.stringify(taskUpdate));
    setInput("");
  }

  function handelInput(value) {
    setInput(value);
  }

  function handelTaskState(value) {
    setTaskState(value);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const Gettask = JSON.parse(localStorage.getItem("task"));
    if (Gettask) {
      setTask(Gettask);
    } else {
    localStorage.setItem("task", JSON.stringify(task)); 
    }
  }, []);
  return (
    <>
      <Dialog
        open={openDeleteAll}
        onClose={handleCloseDeleteAll}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir="rtl"
      >
        <DialogTitle style={{ fontWeight: "bold" }} id="alert-dialog-title">
          هل تريد حذف جميع المهام
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            يرجي العلم انه سيتم حذف جميع المهام بشكل نهائي
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ fontWeight: "bold" }} onClick={handleCloseDeleteAll}>
            اغلاق
          </Button>
          <Button
            style={{ fontWeight: "bold" }}
            onClick={handleDeleteAll}
            autoFocus
          >
            موافق
          </Button>
        </DialogActions>
      </Dialog>

      <Card
        sx={{
          minWidth: 275,
          width: "100%",
          textAlign: "center",
          overflow: "scroll",
          height: "80vh",
        }}
      >
        <CardContent>
          <Typography variant="h1" gutterBottom sx={{ fontWeight: "bold" }}>
            مهامي
            <Divider />
          </Typography>

          <GroudBTN value={TaskState} handelTask={handelTaskState} />

          {taskList}

          <Addtask
            handle={handelAddTask}
            Inputvalue={input}
            handelInput={handelInput}
          />
          <div
            style={{ background: "#ffff", position: "sticky", bottom: "0px" }}
          >
            <Button
              onClick={handleOpenDeleteAll}
              color="error"
              variant="contained"
              sx={{
                width: "80%",
                height: "60px",
                fontWeight: "bold",
              }}
            >
              Delete All
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
  function handleDeleteAll() {
    setTask([]);
    localStorage.setItem("task", JSON.stringify([]));
     setOpenDeleteAll(false);
  }
}
