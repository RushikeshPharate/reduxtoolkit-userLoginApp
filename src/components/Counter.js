import classes from './Counter.module.css';

import { counterActions } from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  
  const dispatch = useDispatch();

  const counter = useSelector((state)=>{
    return state.counter.counter;
  });

  const counterShow = useSelector((state)=>{
    return state.counter.counterShow;
  });

  const onIncreaseHandler =()=>{
    // dispatch({type: 'increase',amount: 5});
    dispatch(counterActions.increase(5));
  };

  const onIncrementHandler =()=>{
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment());
  };

  const onDecrementHandler=()=>{
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggleCounter'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onIncreaseHandler}>Increase by 5</button>
        <button onClick={onDecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
