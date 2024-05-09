import { Counter } from './Counter';

export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <Counter initialValue={0} incrementAmount={2} />
    </div>
  );
}
