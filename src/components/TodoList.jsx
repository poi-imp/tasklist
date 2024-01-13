import React from 'react'

export const TodoList = ({taskList , setTaskList}) => {
  const handleDelete = (id) => {
    // delete the task
    setTaskList(taskList.filter((task) => task.id !==  id));

  }
  const handleCompleted =(id) =>{
    setTaskList(taskList.map((task) => {
      if(id === task.id){
        return{
              ...task,
              done: !task.done
        };
    
      }
      return task;
    }))
  };
  return (
    <div className='todolist'>
        <div className='todos'>
            {taskList.map((task , index) => (
                 <div className={`task ${task.done ? "completed" : ""}`} key={task.id}>
                    <div className="todoText">
                         <span>{task.text}</span>
                    </div>
             
                <div className='icons'>
                <button onClick={() =>handleCompleted(task.id)}>

                     DONE
                    </button>
                    <button onClick={() =>handleDelete(task.id)}>
                     DELETE
                    </button>
                </div>
        </div>
))}
            
        </div>



    </div>
  )
}
