import { Counter } from './Counter';

export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <hr />
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
}
