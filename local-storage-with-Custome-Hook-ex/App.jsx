import React, { useState, useEffect } from "react";

// Custom hook to sync state with localStorage
export const useLocalStorage = (key, initialValue) => {
  // Initialize state with value from localStorage or fallback to initialValue
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return { value, setValue };
};

// App component using the custom hook
const App = () => {
  const { value, setValue } = useLocalStorage("inputValue", "");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default App;
