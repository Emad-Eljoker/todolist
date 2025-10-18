
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

import Alert from '@mui/material/Alert';

export default function MysnakBar({ open,message}) {


//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: SnackbarCloseReason,
//   ) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };


  return (
    <div>
      {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        // onClose={}
  
  
      >
<Alert
  variant="filled"
  severity="success"
  sx={{ fontWeight: "bold", direction: "ltr", whiteSpace:"discard" }}
>
  {"\u00A0"} {message}
</Alert>
      </Snackbar>
    </div>
  );
}



