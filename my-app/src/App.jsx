import { Welcome } from './Welcome';
export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <hr />
      <Welcome name="John" age={19} />
    </div>
  );
}
