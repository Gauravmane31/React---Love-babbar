//it is used when u want to persist a value acoross re-render

import { useReducer, useState, useRef, useEffect } from "react";

// ex: if we written a program of counter incretment then the that component get re-rendered every counter increment at the same time if we declared any varible (let a=0) and we incresing it too, then we supposed to have same value as of count have right now but it doesn't happen because of re-render reloads and initilize let a=0 at every re-render
function UseRef() {
  const [count, changeCount] = useState(0);
  //   let val = 0; this is local varible will get initialized at every render
  //   USEREF() - Use Case : 1 => keep track of value
  let val = useRef(0); //it create a object which contains a current varible and to update this val u should use val.current
  //   NOTE : if we change the value of state variable then UI get re-rendered but if we change value of the Ref varible then it does not re-renders UI
  // USEREF() - Use Case : 2 => directly access any DOM element with easy way
  function handleIncrement() {
    // val += 1;
    // console.log(val);
    val.current = val.current + 1;
    console.log(val);
    changeCount(count + 1);
  }
  let btn = useRef(); //created referance

  function changeColor() {
    let a = Math.random() * 256;
    let b = Math.random() * 256;
    let c = Math.random() * 256;
    btn.current.style.backgroundColor = `rgb(${a},${b},${c})`;
  }
// below useEffect is written to show is render happens or not after changing the color/ ref variable value
//   useEffect(() => {
//     alert("rendered!");
//   });
  return (
    <div>
      <p>count:{count}</p>
      {/* add ref to element that u want to access */}
      <button ref={btn} onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={changeColor}>changeColorOFbutton</button>
    </div>
  );
}
export default UseRef;
