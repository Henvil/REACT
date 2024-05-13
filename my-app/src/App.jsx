import Todo from './Todo';
import { Clock } from './Clock';
import { Container } from './Container';
import { LanguageContext } from './LanguageContext';
import { useState } from 'react';
import { HelloWorld } from './HelloWorld';

export function App() {
  const [language, setLanguage] = useState('en');

  function handleSetLanguage(language) {
    setLanguage(language);
  }
  return (
    <div className={'app'}>
      <button onClick={() => handleSetLanguage('it')}>Italiano</button>
      <button onClick={() => handleSetLanguage('en')}>Inglese</button>
      <LanguageContext.Provider value={language}>
        <HelloWorld />
        <Container title={<h1>Questa è un esempio di App</h1>}>
          <Clock />
          <Todo />
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}
