import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Mission from "./mession";
import GroudBTN from "./groudBTN";
import Addtask from "./addTask";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useMemo, useState } from "react";
import { TaskContext } from "./context/context";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from '@mui/material/TextField';


import { ToastContext } from "./context/ToastContext";

export default function MyCard() {

    const {showHideToast} = useContext(ToastContext )

  const [Selectedtodo,SetSelectedTodo] =useState({});
  const [openDeleteAll, setOpenDeleteAll] = useState(false);

  const {task, setTask } = useContext(TaskContext);
  const [input, setInput] = useState("");

  const [TaskState, setTaskState] = useState("all");

//Delete State 
  const [openDelete ,setOpenDelete] = useState(false)


//Edit state 
  const [openEdit ,setOpenEdit] = useState(false)

// const [EditInput,setEditInput] = useState({title:Selectedtodo.title , description:Selectedtodo.description})


//Selected object


  const Completed = useMemo(()=>{
   return task.filter((t) => {
  console.log("Completed Render")
    return t.isCompleted
  });
  },[task])

  const notCompleted = useMemo(()=>{
    return task.filter((t) => {
  console.log("Not Completed Render")
    return !t.isCompleted
  });
  },[task])

  let taskWillbeRender = task;
  if (TaskState === "completed") {
    taskWillbeRender = Completed;
  } else if (TaskState === "not-completed") {
    taskWillbeRender = notCompleted;
  } else {
    taskWillbeRender = task;
  }

//Delete all
  const handleOpenDeleteAll = () => {
    setOpenDeleteAll(true);
   
  };

  const handleCloseDeleteAll = () => {
    setOpenDeleteAll(false);
  };
//==Delete all
//==Basic
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
    showHideToast("تم اضافة المهمة بنجاح ")
  }

  function handelInput(value) {
    setInput(value);
  }

  function handelTaskState(value) {
    setTaskState(value);
  }
  //==Basic
//=====Delete function 
  const handleCloseDelete = () => {
    setOpenDelete(false)
  };

  function handelOpenDelete(todo){
  SetSelectedTodo(todo);
      setOpenDelete(true)
  }

  
//==Edit function 



      const handleOpenEdit = (todo) => {
        SetSelectedTodo(todo);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  
const handelEdit =() =>{
const taskUpdate = task.map(item=>{
  if(item.id === Selectedtodo.id){
    return {...item , title:Selectedtodo.title, description:Selectedtodo.description}
  }else return item 
})
setTask(taskUpdate)
localStorage.setItem("task",JSON.stringify(taskUpdate))
  setOpenEdit(false);
    showHideToast("تم التعديل بنجاح ")
}
//==
  
const handelDelete =() =>{
const taskUpdate = task.filter(item=>item.id!== Selectedtodo.id)
setTask(taskUpdate)
localStorage.setItem("task",JSON.stringify(taskUpdate))
    setOpenDelete(false)
       showHideToast("تم الحذف بنجاح ") 
}
//==
useEffect(() => {
  const Gettask = JSON.parse(localStorage.getItem("task"));
  if (Gettask) {
    setTask(Gettask);
  } else {
    localStorage.setItem("task", JSON.stringify(task)); 
  }
  // eslint-disable-next-line
},[]);

    const taskList = taskWillbeRender.map((t) => <Mission key={t.id} t={t} openDelete={handelOpenDelete} HopenEdit={handleOpenEdit} />);

  return (
    <>
    {/* Delete Dialog  */}
          <Dialog
     
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    dir="rtl"

     >
        <DialogTitle     style={{fontWeight:"bold"}}   id="alert-dialog-title">
        هل تريد حذف المهمه
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         يرجي العلم انه سيتم حذف المهمة بشكل نهائي
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight:"bold"}}  onClick={handleCloseDelete}>اغلاق</Button>
          <Button style={{fontWeight:"bold"}}  onClick={handelDelete} autoFocus>
        موافق
          </Button>
        </DialogActions>
      </Dialog>
    {/* == Delete Dialog */}
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
{/* == Delete Dialog */}
{/* Edit Dialog */}
  <Dialog
     
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    dir="rtl"

     >
        <DialogTitle     style={{fontWeight:"bold"}}   id="alert-dialog-title">
        هل تريد تعديل المهمه
        </DialogTitle>
        <DialogContent>
       <TextField 
       value={Selectedtodo.title}
       onChange={(e)=>{SetSelectedTodo({...Selectedtodo,title:e.target.value})}}
              autoFocus
              margin="dense"
              label="العنوان"
              fullWidth
              variant="standard"
            />
               <TextField 
                value={Selectedtodo.description}
       onChange={(e)=>{SetSelectedTodo({...Selectedtodo,description:e.target.value})}}
              autoFocus
              margin="dense"
              label="التفاصيل"
              fullWidth
              variant="standard"
            />
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight:"bold"}}  onClick={handleCloseEdit}>اغلاق</Button>
          <Button style={{fontWeight:"bold"}}  onClick={handelEdit} autoFocus>
        موافق
          </Button>
        </DialogActions>
      </Dialog>
{/* ==Edit Dilaog */}
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

