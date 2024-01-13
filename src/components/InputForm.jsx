import React, { useState } from 'react'


export const InputForm = ({taskList,setTaskList}) =>{
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
    {
      id:taskList.length ,
      text: inputText,
      done:false
    }
  ]);

  setInputText("");

} 

const handleChange = (e) => {
setInputText(e.target.value);

}




  return (
    <div className='inputForm'>InputForm
    <form onSubmit={handleSubmit}>
      <input type='text'   onChange={handleChange} value={inputText}/>
      <button>

      </button>
      <button>


      </button>

    </form>
    
    
    </div>
  )
}
