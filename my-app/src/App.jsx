import { useState } from 'react';

import { GitHubUser } from './GitHubUser';
import { GitFetchSearch } from './GitFetchSearch';

export function App() {
  const [language, setLanguage] = useState('en');

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div className={'app'}>
      <button onClick={() => handleSetLanguage('it')}>Italiano</button>
      <button onClick={() => handleSetLanguage('en')}>Inglese</button>
      <GitHubUser username={'Henvil'} />
      <GitFetchSearch />
    </div>
  );
}
