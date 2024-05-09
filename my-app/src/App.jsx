import Colors from './Colors';
import MyList from './MyList';

export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <Colors
        items={[
          { id: 1, name: 'Red' },
          { id: 2, name: 'Green' },
          { id: 3, name: 'Blue' },
        ]}
      />
    </div>
  );
}
