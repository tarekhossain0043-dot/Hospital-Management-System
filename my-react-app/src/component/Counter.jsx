
import React from "react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const btnValue = 'CountBtn';

  return (
    <div>
       <h2>
            This is Count Value is {count}
       </h2>
       <button onClick={setCount(count + 1)}>{btnValue}</button>
    </div>
  )
}

export default Counter