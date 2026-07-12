import { useState } from "react";
import UseContext from "./components/7_useContextHook";
import Routing from "./components/8_Routing";
function App1() {
  return (
    <div>
      {/* 7 - Show how usecontext works for prop drilling. */}
        {/* <UseContext/> */}
      {/* 8  */}
        <Routing/>
    </div>
  );
}

export default App1;