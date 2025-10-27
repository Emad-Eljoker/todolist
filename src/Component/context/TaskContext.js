import { createContext } from "react";
 import { useReducer } from "react";
import { taskReducer } from "../../Reducers/taskreducer";
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

export const TaskContext =createContext([])


 export const TaskProvider = ({children})=>{
 const [task, dispatch] = useReducer(taskReducer, initialTask)
    return (
    
<TaskContext.Provider value={{task, dispatch,initialTask}}>
{children}
</TaskContext.Provider>
 
    )
}












