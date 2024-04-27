import { Age } from './Age';
export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Welcome, {name ? name : 'Guest'} !</h2>
      {age > 18 && (
        <p>
          Your age is <Age age={age} />, greater than 18.
        </p>
      )}
      {!!age && (
        <p>
          Your age is actually true and it's <Age age={age} />.
        </p>
      )}
      {age > 18 && age < 65 && (
        <p>
          Your age is greater than 18 and less than 65 and it's{' '}
          <Age age={age} />.
        </p>
      )}
      {age > 18 && age < 65 && name === 'John' && (
        <p>
          Your age is <Age age={age} /> and your name is {name}.
        </p>
      )}
    </div>
  );
}
