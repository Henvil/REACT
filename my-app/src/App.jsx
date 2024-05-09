import MyList from './MyList';

export function App() {
  return (
    <div>
      <h1>Questa è un esempio di App</h1>
      <MyList
        items={[
          { id: 1, name: 'Ketty', age: 58 },
          { id: 2, name: 'Davide', age: 61 },
          { id: 3, name: 'Giuliana', age: 25 },
          { id: 4, name: 'Lillo', age: 29 },
        ]}
      />
    </div>
  );
}
