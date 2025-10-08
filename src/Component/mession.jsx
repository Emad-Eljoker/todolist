import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
// icons
import CheckIcon from "@mui/icons-material/Check";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
import { useContext} from "react";
import { TaskContext } from "./context/context";
import TextField from '@mui/material/TextField';

export default function Mission({t}) {

  const {task,setTask,handelCompelete} = useContext(TaskContext)
  const [openDelete ,setOpenDelete] = useState(false)

  const [openEdit ,setOpenEdit] = useState(false)

const [EditInput,setEditInput] = useState({title:t.title , detailes:t.description})

      const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  
const handelDelete =() =>{
const taskUpdate = task.filter(item=>item.id!==t.id)
setTask(taskUpdate)
localStorage.setItem("task",JSON.stringify(taskUpdate))
}



      const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  
const handelEdit =() =>{
const taskUpdate = task.map(item=>{
  if(item.id === t.id){
    return {...item , title:EditInput.title, description:EditInput.detailes }
  }else return item 
})
setTask(taskUpdate)
localStorage.setItem("task",JSON.stringify(taskUpdate))
  setOpenEdit(false);
}

  return (
    
<>
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
    <Card
      className="taskCard"
      sx={{ bgcolor: "#50589C", marginBottom: "10px" }}
    >
      <CardContent>
        {/* grid */}
        <Grid container spacing={2} alignItems="center" >
          <Grid size={6} sx={{ display: "flex" , gap: { xs: 1, sm: 2, md: 3 } }} >
            <IconButton
            onClick={handleOpenDelete}
              className="iconBtn"
              sx={{
                color: "#de404B",
                bgcolor: "#fff",
                borderRadius: "50%",
                fontSize: "60px",
                border: "#de404B solid",
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>

            <IconButton
            onClick={handleOpenEdit}
              className="iconBtn"
              sx={{
                color: "#6E8CFB",
                bgcolor: "#fff",
                borderRadius: "50%",
                fontSize: "60px",
                border: "#6E8CFB solid",
              }}
            >
              <EditOutlinedIcon />
            </IconButton>

            <IconButton
              onClick={() => {
                handelCompelete(t.id);
              }}
              className="iconBtn"
              sx={{
                color: t.isCompleted ? "#fff" : "#67C090",
                bgcolor: t.isCompleted ? "#67C090" : "#fff",
                borderRadius: "50%",
                fontSize: "60px",
                border: "#67C090 solid",
              }}
            >
              <CheckIcon />
            </IconButton>

            
          </Grid>

          <Grid size={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#fff", textAlign: "end",textDecoration:t.isCompleted?"line-through":"none" }}
            >
              {t.title}
            </Typography>

            <Typography variant="h6" sx={{ color: "#fff", textAlign: "end" }}>
              {t.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
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
       value={EditInput.title}
       onChange={(e)=>{setEditInput({...EditInput,title:e.target.value})}}
              autoFocus
              margin="dense"
              label="العنوان"
              fullWidth
              variant="standard"
            />
               <TextField 
                value={EditInput.detailes}
       onChange={(e)=>{setEditInput({...EditInput,detailes:e.target.value})}}
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
</>
  );

}
