// React - Redux
// used to state management - advanced/centralized version of useContext
// Terms - Action,Reducer,slice,store,state
// ex: onClick -> handleClick() -> Action Dispatch -> Store -> Reducer -> logic Exe -> store -> state update -> UI update

// components
// 1.slice => each state maintaning logic is present here and reducer is also there
// 2.reducer => functions that changes/update data
// 3.action => whatever happens after action will be taken
// 4.store => place where all data is present
// 5.state => data

//1 - import neccessory files
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";

function Redux() {
  const [valuetoadd, changevalue] = useState();
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }
  function updatevaluetoadd(e) {
    changevalue(e.target.value);
  }
  function handleAdd(e) {
    dispatch(incrementByAmount(valuetoadd));
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>

      <h2>Count : {count}</h2>

      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="enter numnber to add"
        onChange={updatevaluetoadd}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Redux;
