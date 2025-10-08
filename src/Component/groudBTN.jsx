import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function groudBTN ({value, handelTask}){
    return(
        <>
         <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
      
        },
      }}
    >
      <ButtonGroup 
     value ={value}
      onClick ={(e)=>{handelTask(e.target.value)}}
      variant="outlined" aria-label="Basic button group" color="error" sx={{marginBottom:4}}>
       
       
        <Button 
              variant={value === "not-completed" ? "contained" : "outlined"}
        value ="not-completed">غير المنجز</Button>

         <Button 
          variant={value === "completed" ? "contained" : "outlined"}
         value ="completed">منجز</Button>


         <Button
           variant={value === "all" ? "contained" : "outlined"}
         value="all">الكل</Button>
      </ButtonGroup>
   
    </Box>
        </>
    )
}