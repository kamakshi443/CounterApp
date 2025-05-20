import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleIncrement = () => {
    const newValue = count + 1;
    if (newValue > 10) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }
      , 2000);
      return;
    }
    setCount(newValue);
  };
  const handleDecrement = () => {
    const newValue = count - 1;
    if (newValue < 0) {
      setShowError(true);
      setTimeout(() => { 
        setShowError(false);
      }
      , 2000);
      return;
    }
    setCount(newValue);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter App </h1>
      {showError && (
        <h2 style={{ color: "red" }}>Count should be between 0 and 10</h2>
      )}
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
}

export default App;
