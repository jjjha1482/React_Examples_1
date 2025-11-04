// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
   const [tasksArr, setTasks] = useState([]);
   const addTask = (inputValue) => {
      // Complete the function
      if (inputValue.trim === "") return;
      setTasks([...tasksArr, inputValue])
   };

   const handleDelete = (idx) => {
      // Complete the function
      const newArr = tasksArr.filter((_, i) => i !== idx);
      setTasks(newArr);
   };

   return (
      // react Fragments
      <>
         <InputBox addTask={addTask} />
         <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
      </>
   );
}

export default Todo;
