//======================================================================================================================
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// // 1
// import Usestateuse from './components/1_UseState'
// //2
// import UsestateChild from './components/2_Lifting_state_up'
// //3
// import Childprops from './components/3_ChildrenAsProps'

// function App() {
//   const [string,Updatestring] = useState('');
//   const [count, setCount]= useState(0);

//   function increment(){
//     setCount(count+1);
//   }
//   return (
//---------------------------------------------------------------------------------------------
//1 - Use of Use State.
// <div className='flex justify-center'>
//   <Usestateuse/>
// </div>
//---------------------------------------------------------------------------------------------
//2 - create state in parent, change in parent, manage in parent and just pass it to child so that they can manipulate and as the state is in parent it will get reflected in all chlid if they are also accessing it.
// <div>
//   <UsestateChild name={string} function={Updatestring}/>
//   <UsestateChild name={string} function={Updatestring}/>
// </div>
//---------------------------------------------------------------------------------------------
//3 - childrens in React( used when we dont know erlier about content and which data will be there.) and it contains example of function passing to child
// <div>
//   <Childprops children="Hey I will get over-written by inside content." incrementer={increment} text="click me" countnew={count}>
//     <del>These are children 1</del>
//     <em>These are children 2</em>
//     <p>These are children 3</p>
//   </Childprops>
// </div>
//   )
// }

// export default App
//======================================================================================================================

//---------------------------------------------------------------------------------------------
//example of state lifting:
//---------------------------------------------------------------------------------------------
//EX 1
// import { useState } from 'react';

// export default function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <>
//       <h2>Almaty, Kazakhstan</h2>
//       <Panel
//         title="About"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex(0)}
//       >
//         With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//       </Panel>
//       <Panel
//         title="Etymology"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex(1)}
//       >
//         The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//       </Panel>
//     </>
//   );
// }

// function Panel({
//   title,
//   children,
//   isActive,
//   onShow
// }) {
//   return (
//     <section className="panel">
//       <h3>{title}</h3>
//       {isActive ? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={onShow}>
//           Show
//         </button>
//       )}
//     </section>
//   );
// }
//---------------------------------------------------------------------------------------------

//======================================================================================================================
import { useState } from "react";
import Conditional from "./components/4_ConditionalRendering";
import Event from "./components/5_EventHandlingInReact";
import UseEffect from "./components/6_useEffect";

function App() {
  const [activeSection, setActiveSection] = useState(1);
  const [count,setcount] = useState(0);
  return (
    //---------------------------------------------------------------------------------------------
    //4 -> Conditional Statement in jsx(react)
    // <div>
    //     <Conditional
    //         id={1}
    //         activeSection={activeSection}
    //         setActiveSection={setActiveSection}
    //         DefaultContent="Section 1"
    //     >
    //         <p>This is content for Section 1.</p>
    //     </Conditional>

    //     <Conditional
    //         id={2}
    //         activeSection={activeSection}
    //         setActiveSection={setActiveSection}
    //         DefaultContent="Section 2"
    //     >
    //         <p>This is content for Section 2.</p>
    //     </Conditional>
    // </div>
    //---------------------------------------------------------------------------------------------
    //5 -> shows event handling
    //---------------------------------------------------------------------------------------------
    // <div>
    //   <Event />
    // </div>
    //---------------------------------------------------------------------------------------------
    //6 -> variation of useEffect
    //---------------------------------------------------------------------------------------------
    <div>
      <UseEffect count={count}/>
      <button onClick={()=>{setcount(count+1)}}>Click me</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
//======================================================================================================================
