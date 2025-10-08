import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function Addtask ({handle,Inputvalue,handelInput}){
    return (
        <>
        <Grid container spacing={2} sx={{ direction:"rtl", position:"sticky", bottom:"60px",bgcolor:"#fff",padding:"10px"}} >

   <Grid size={8} >
         <TextField 
         value={Inputvalue}
         onChange={(event)=>{handelInput(event.target.value)}}
         style={{width:"100%"}} id="outlined-basic" label="عنوان المهمه" variant="outlined" />
       </Grid>


                <Grid size={4}  >
          <Button 
          disabled={Inputvalue.length=== 0}
          onClick={()=>{handle()}}
          
          sx={{width:"100%",height:"100%", fontWeight:"bold"}} variant="contained">اضافة</Button>

         
       </Grid>      
             </Grid>
        </>
    )
}


