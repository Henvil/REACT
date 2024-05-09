import React, { useState, useEffect } from 'react';
import { CounterDisplay } from './Counterdisplay';
import { useRef } from 'react';

export function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);
  const prevCounterRef = useRef(initialValue);

  useEffect(() => {
    console.log('The current counter value is:', counter);

    if (counter > prevCounterRef.current) {
      directionRef.current = 'Valore aumentato.';
    } else if (counter < prevCounterRef.current) {
      directionRef.current = 'Valore diminuito.';
    }
    prevCounterRef.current = counter;

    if (directionRef.current !== null) {
      console.log('Cambiamento:', directionRef.current);
    }
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
