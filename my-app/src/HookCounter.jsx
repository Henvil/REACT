import { useCounter } from './useCounter';

export default function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>Aumenta</button>
      <button onClick={onDecrement}>Diminuisci</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
