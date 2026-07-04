import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
//1
// import Profile from "./componants/1_Profile"; //Uncomment this to see how components helps use to reuse same code again and again.
//2
// import PropsEx from './componants/2_PropsEx'; //Uncomment this to see how props helps to change content of same code dyanamically.

function App() {
  return (
    <>
    {/**********************************************************************************************************/}
      {/* 1 */}
      {/* Using components we dont need to write same code again and again, we can simply write function name to repeat same code N times(we can use JS to add DYNAMIC content to same code as well.) */}
      {/* <Profile />
      <Profile />
      <Profile /> */}
    {/**********************************************************************************************************/}
      {/* 2 */}
      {/* this is example of props uses, which will help us to send/pass values as parameters to components(values like name,images,url,css,etc.) */}
      {/* <PropsEx name="Gaurav Mane" img={reactLogo} style={{"margin":"10px","background-color":"red"}}/>
      <PropsEx name="Prajwal Baddi" img={viteLogo} style={{"margin":"20px","background-color":"green"}}/>
      <PropsEx name="Sandesh Dhumal" img={heroImg} style={{"margin":"30px","background-color":"yellow"}}/> */}
    </>
  );
}

export default App;
