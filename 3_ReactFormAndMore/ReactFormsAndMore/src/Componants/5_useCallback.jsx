// UseCallback
//saves function referance/ freeze
//stops un neccesary re-render of some part of compo which is never changed
// rafce - short cut
import React, { useCallback, useState } from "react";
import Child from "../Componants/5_child";
const UseCallback = () => {
  const [count, setCount] = useState(0);
  //   function handleClick() {
  //     setCount(count + 1);
  //   }
  //   const handleClick = useCallback(() => {
  //     setCount(count + 1);
  //   }, []);//but only this is not sufficient u should also have to mention dependancy for calling function but it will also re-render un necessarily hence we have below method
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleClick}>Increment</button>
      {/* we have passed function as params hence we have to use callback to stop re rendering bcz of change in other code of this component not change in the child compo. */}
      <Child handleClick={handleClick} />
    </div>
  );
};

export default UseCallback;
