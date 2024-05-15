import { useState } from 'react';
import HookCounter from './HookCounter';
import { GitHubUser } from './GitHubUser';

export function App() {
  return (
    <div className={'app'}>
      <h1>Il nome della mia app</h1>
      <HookCounter />
      <GitHubUser username="Henvil" />
      <GitHubUser username="gianmarcotoso" />
    </div>
  );
}
