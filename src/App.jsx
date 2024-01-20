import React, { useCallback, useState } from "react";
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(0);
  console.log('app is rendering')
   
  const btnhandler = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>{toggle ? "on" : "of"}</button>
      <h1>count : {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>increment</button> */}
      <Child number={count} btnhandler={btnhandler} />
    </div>
  );
};

export default App;
