import React, { useState, useEffect } from 'react';
import { CounterDisplay } from './Counterdisplay';

export function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log('The current counter value is:', counter);
  }, [counter]);

  function handleCounterIncrease() {
    setCounter((c) => c + incrementAmount);
  }

  function handleCounterDecrease() {
    if (counter > initialValue) {
      setCounter((c) => c - incrementAmount);
    }
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <button onClick={handleCounterIncrease}>Feed me!</button>
      <button onClick={handleCounterDecrease}>Let me starve!</button>
      <button onClick={handleCounterReset}>Let me be reborn!</button>
      <CounterDisplay counter={counter} />
    </div>
  );
}
