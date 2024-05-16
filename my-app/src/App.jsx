import { useState } from 'react';
import HookCounter from './HookCounter';
import { GitHubUser } from './GitHubUser';
import CurrentLocation from './CurrentLocation';

export function App() {
  return (
    <div className={'app'}>
      <h1>Il nome della mia app</h1>
      <GitHubUser username="Henvil" />
      <GitHubUser username="gianmarcotoso" />
      <h1>Esercizio sulla localizzazione</h1>
      <CurrentLocation />
    </div>
  );
}
