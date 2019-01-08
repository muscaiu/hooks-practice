import React, { useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default UseEffect;
