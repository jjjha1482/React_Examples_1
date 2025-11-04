import React, { useEffect, useState } from "react";

const App = () => {
   // Edit this component
   /***
    * * Do not edit the data-testid attributes.
    * Use key inputValue to store the data in local storage.
    * */
   const [inputValue, setInputValue] = useState(() => {
      return localStorage.getItem("inputValue") || "";   //if data avalibe then || "" means blank on intial state
   });

   useEffect(() => {
      localStorage.setItem("inputValue", inputValue);
   }, [inputValue]);   //inputvalue effect show on broswer if value change then new effect value show on screen

   return (
      <div>
         <input data-testid="input-id" type="text" value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
      </div>
   );
};
export default App;
