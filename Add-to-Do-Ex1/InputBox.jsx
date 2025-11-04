import React, { useState } from "react";

function InputBox({ addTask }) {
   const [input, setInput] = useState("");
   const handleInput = (e) => {
      // Add code here
      if (e.key === "Enter") addTaskChild();

   };
   const addTaskChild = () => {
      // Add code here
      addTask(input);
      setInput("");
   };
   return (
      <div className="inputbox">
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
            onkeydown={handleInput} placeholder="Add Task" />

         <button onClick={addTaskChild}>Add Task</button>
      </div>
   );
}

export default InputBox;
