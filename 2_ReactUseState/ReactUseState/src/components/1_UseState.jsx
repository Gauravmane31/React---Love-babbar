import { useState } from "react";

function Usestateuse() {
  const [count, setCount] = useState(0);//it is basically a variable which will work as common for all its child along with itself.
  return (
    <div className= "w-2xs h-40 flex flex-col justify-center border-1 text-center">
      <p>The counter is {count}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="border-2 w-20 self-center"
      >
        Increase
      </button>
    </div>
  );
}

export default Usestateuse;
