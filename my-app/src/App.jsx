import { UncontrolledLogin } from './UncontrolledLogin';

export function App() {
  const handleLogin = (userData) => {
    console.log('Dati di accesso:', userData);
  };
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <UncontrolledLogin />
    </div>
  );
}
