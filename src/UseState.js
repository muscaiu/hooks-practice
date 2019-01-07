import React, { useState } from 'react';

function UseEffect() {
  const [count, setCount] = useState(0);
  console.log('count', count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default UseEffect;
