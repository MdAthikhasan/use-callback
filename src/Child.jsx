import React, { memo, useMemo } from "react";

const Child = memo(({ number, btnhandler }) => {
  console.log("child is rendering");

    let calculator = useMemo(() => {
         let a = 0;
         for (let index = 0; index < 5; index++) {
           a++;
        }
        return a 
 },[])
  return (
    <div>
      <h2>Number: {calculator}</h2>
      <h2>count is {number}</h2>
      <button onClick={btnhandler}>childbutton</button>
    </div>
  );
});

export default Child;







