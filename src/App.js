
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import TodoList from './Component/todoList';
import { TaskContext } from './Component/context/context';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

  
  function handelCompelete (taskId){
  const Comp =task.map(ta=>{
    if(ta.id === taskId){
      ta.isCompleted =!ta.isCompleted
    
    }
    return ta
  
  })
  setTask(r =>r = Comp)
    localStorage.setItem("task",JSON.stringify(Comp))
  }
  return (
      <ThemeProvider theme={theme}>
    <div className="App" style={{
    fontFamily:"'Cairo', sans-serif",
  color:"#ffff"
    }}>
  <TaskContext.Provider value={{task,setTask,handelCompelete}}>
     <TodoList/>
       </TaskContext.Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;
