
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import TodoList from './Component/todoList';
import { TaskContext } from './Component/context/context';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MysnakBar from './Component/Mysnak';
import { ToastContext } from './Component/context/ToastContext';

const initialTask = [
  {
    id: uuidv4(),
    title: "Task 1 Title",
    description: "task 1 detialis here ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Task 2 Title",
    description: "task 2 detialis here ",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Task 3 Title",
    description: "task 3 detialis here ",
    isCompleted: false,
  },
];
const theme = createTheme({
  typography:{
    fontFamily:[
      "Cairo"
    ]

  }
})

function App() {
  const [task,setTask] = useState(initialTask)
  const [openSnak, setOpenSnak] = useState(false);
  const [message,setMessage]=useState("")

  function showHideToast (message){
       setOpenSnak(true)
    setTimeout(()=>{
      setOpenSnak(false)
    },3000)
    setMessage(message)
  }


  function handelCompelete (taskId){
  const Comp = task.map(ta=>{
    if(ta.id === taskId){
      ta.isCompleted =!ta.isCompleted
       
    if(ta.isCompleted === true){
       showHideToast(r => r = "تم اكمال المهمه") 
    }else if(ta.isCompleted === false){
       showHideToast(r => r = "تم  الغاء اكمال المهمه") 
    }
    }
    return ta
  
  })
  setTask(r =>r = Comp)
    localStorage.setItem("task",JSON.stringify(Comp))

  }


  
  return (
      <ThemeProvider theme={theme}>
        <ToastContext.Provider value={{showHideToast}}>
    <div className="App" style={{
    fontFamily:"'Cairo', sans-serif",
  color:"#ffff"
    }}>
      <MysnakBar open ={openSnak} {...{message}} />
      
  <TaskContext.Provider value={{task,setTask,handelCompelete}}>
     <TodoList/>
       </TaskContext.Provider>
    </div>
    </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;
