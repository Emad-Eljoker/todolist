
import { v4 as uuidv4 } from "uuid";
export function taskReducer (currentTask,{type,payload}){
switch(type){
    case "add":{
            let newtask = {
      id: uuidv4(),
      title: payload.newInput,
      description: "",
      isCompleted: false,
    };
    const taskUpdate = [...currentTask, newtask];
  
    localStorage.setItem("task", JSON.stringify(taskUpdate));

     return taskUpdate;
    }


    

case "Edit":{
     const taskUpdate = currentTask.map((item) => {
      if (item.id === payload.id) {
        return {
          ...item,
          title: payload.title,
          description: payload.description,
        };
      } else return item;
    });
        localStorage.setItem("task", JSON.stringify(taskUpdate));

    return (taskUpdate);
}
    
case "Delete":{
    const taskUpdate = currentTask.filter((item) => item.id !== payload.id);
  
    localStorage.setItem("task", JSON.stringify(taskUpdate));

 return taskUpdate;
}

case "DeleteAll":{
     
    localStorage.setItem("task", JSON.stringify([]));
 
    return []
}


case "get":{
      const Gettask = JSON.parse(localStorage.getItem("task"));
    if (Gettask) {
     return (Gettask);
    } 
    else {
      localStorage.setItem("task", JSON.stringify(payload));
      return payload
    }
}
case "complete":{
    const Comp = currentTask.map(ta=>{
      if(ta.id === payload.id){
        const NewTodo = { ...ta,isCompleted:!ta.isCompleted}
       return NewTodo
      }
     return ta
    
    })
    
       localStorage.setItem("task",JSON.stringify(Comp))
    return  Comp
}

    default :{
        throw new Error("unkown Action "+type)
    }
}
}



