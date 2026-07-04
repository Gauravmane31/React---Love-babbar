import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// 1
// import Usestateuse from './components/1_UseState'
//2
import UsestateChild from './components/2_Lifting_state_up'
//3
import Childprops from './components/3_ChildrenAsProps'

function App() {
  const [string,Updatestring] = useState('');
  const [count, setCount]= useState(0);

  function increment(){
    setCount(count+1);
  }
  return (
    //1 - Use of Use State.
    // <div className='flex justify-center'>
    //   <Usestateuse/>
    // </div>
    //2
    <div>
      <UsestateChild function={Updatestring}/>
      <UsestateChild function={Updatestring}/>
    </div>
    //3 - childrens in React( used when we dont know erlier about content and which data will be there.) and it contains example of function passing to child
    // <div>
    //   <Childprops children="Hey I will get over-written by inside content." incrementer={increment} text="click me" countnew={count}>
    //     <del>These are children 1</del>
    //     <em>These are children 2</em>
    //     <p>These are children 3</p>
    //   </Childprops>
    // </div>
  )
}

export default App
