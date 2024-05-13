import Todo from './Todo';
import { Clock } from './Clock';
import { Container } from './Container';
export function App() {
  return (
    <div className={'app'}>
      <Container title={<h1>Questa è un esempio di App</h1>}>
        <Clock />
        <Todo />
      </Container>
    </div>
  );
}
