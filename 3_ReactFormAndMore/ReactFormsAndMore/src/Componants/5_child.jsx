import React from "react";
//React.memo is used to stop unnecessory re-rendering of components only where only varibles are passed through params, if functions are passed then it will re-render although there is use of React.memo bcz react.memo can only stop rendering due to varibles
const child = React.memo((params) => {
  return (
    <div>
      {console.log("component is re-rendered!")}
      <button onClick={params.handleClick}>Click me</button>
    </div>
  );
});

export default child;
