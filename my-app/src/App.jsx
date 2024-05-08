import InteractiveWelcome from './InteractiveWelcome';
import { Login } from './Login';
import { Welcome } from './Welcome';

export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <h5>Inserisci qui il tuo nome:</h5>
      <Login />
    </div>
  );
}
