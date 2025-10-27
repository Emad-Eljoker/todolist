
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import TodoList from './Component/todoList';

import { useState } from "react";


import {  ToastProvider } from './Component/context/ToastContext';
import {  TaskProvider } from './Component/context/TaskContext';


const theme = createTheme({
  typography:{
    fontFamily:[
      "Cairo"
    ]

  }
})

function App() {
  // const [task,setTask] = useState(initialTask)


  
  return (
      <ThemeProvider theme={theme}>
            <TaskProvider>  
        <ToastProvider> 
    <div className="App" style={{
    fontFamily:"'Cairo', sans-serif",
  color:"#ffff"
    }}>
    
  
  {/* <TaskContext.Provider value={{task,setTask,initialTask}}> */}
     <TodoList/>
       {/* </TaskContext.Provider> */}
    </div>
</ToastProvider>
 </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
