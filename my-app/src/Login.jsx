import React, { useState } from 'react';
import { Welcome } from './old-components/Welcome';

function formData() {
  return {
    username: '',
    password: '',
    remembered: false,
  };
}
export function Login({ onLogin }) {
  const [data, setData] = useState(formData());
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    onLogin(data);
  };
  const handleReset = () => {
    setData(formData());
    setSubmitted(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Nome"
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="remember"
          name="remembered"
          checked={data.remembered}
          onChange={handleChange}
        />
        <label htmlFor="remember">Ricordami</label>
      </div>
      <button type="submit">Accedi</button>
      {submitted && <Welcome name={data.username} />}
      <button onClick={handleReset}>Cancella</button>
    </form>
  );
}
