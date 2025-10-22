import { createContext, useContext, useState } from "react";
import MysnakBar from "../Mysnak";


  const  ToastContext = createContext(null)

export const ToastProvider = ({children})=>{

const [openSnak, setOpenSnak] = useState(false);
 const [message,setMessage]=useState("")

function showHideToast (message){
       setOpenSnak(true)
    setTimeout(()=>{
      setOpenSnak(false)
    },3000)
    setMessage(message)
  }
  return (
       <ToastContext.Provider value={{showHideToast}}>
          <MysnakBar open ={openSnak} {...{message}} />
         {children}
         </ToastContext.Provider>
  )
}

export const useToast = ()=>{
 return useContext(ToastContext);
}
