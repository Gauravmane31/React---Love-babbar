//Use Memo - React hook
// Memo=Memoisation(kind of DP in DSA - Memorization)
//inspect the page and then see the change when u use useMemo and without useMemo
import { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function square(num) {
    console.log("Calculating...");
    return num * num;
  }
  //   const square = useMemo(() => {
  //     console.log("Calculating...");
  //     return count * count;
  //   }, [count]);

  return (
    <>
      <h2>Square: {square(count)}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default UseMemo;
