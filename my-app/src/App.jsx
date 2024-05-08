import InteractiveWelcome from './old-components/InteractiveWelcome';
import { Login } from './Login';
import { Welcome } from './old-components/Welcome';

export function App() {
  const handleLogin = (userData) => {
    console.log('Dati di accesso:', userData);
  };
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <h5>Inserisci qui il tuo nome:</h5>
      <Login onLogin={handleLogin} />
    </div>
  );
}
