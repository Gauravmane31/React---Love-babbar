import { useState } from "react";
import "./App.css";
//1
import ReactForm from "./Componants/1_reactForm";
//2
import Redux from "./Componants/2_Redux/2_Redux";
//3
import UseRef from "./Componants/3_useRef";
//4
import UseMemo from "./Componants/4_useMemo";
import UseCallback from "./Componants/5_useCallback";

function App() {
  return (
    <div>
      {/* <ReactForm /> */}
      {/* <Redux /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
}

export default App;
