import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import CheckIcon from "@mui/icons-material/Check";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { useContext} from "react";

import { useToast} from "./context/ToastContext";
import { TaskContext } from "./context/TaskContext";


export default function Mission({t,openDelete,HopenEdit}) {
     const {dispatch} = useContext(TaskContext);
     const {showHideToast} =useToast()
  //================Completed===============
function handelCompelete (taskId){
  const NewisCompleted = !t.isCompleted
      if(NewisCompleted){
         showHideToast( r => r = "مهمة مكتملة") 
      }else if(NewisCompleted === false){
         showHideToast( r => r = "مهمة غير مكتملة") 
      }
dispatch({type:"toggle",payload:{id:taskId}})
  }
  //================Open Delete==============
      const handleOpenDelete = () => {
 openDelete(t)
  };





  //================Open Edit==============

      const handleOpenEdit = () => {
   HopenEdit(t)
  };



  return (
    
<>

    <Card
      className="taskCard"
      sx={{ bgcolor: "#50589C", marginBottom: "10px" }}
    >
      <CardContent>
        {/* grid */}
        <Grid container spacing={2} alignItems="center" >
          <Grid size={6} sx={{ display: "flex" , gap: { xs: 1, sm: 2, md: 3 } }} >
            <IconButton
            aria-label="احذف العنصر"
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
             aria-label="عدل العنصر"
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
              aria-label="اكمل المهمه"
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
   
</>
  );

}
