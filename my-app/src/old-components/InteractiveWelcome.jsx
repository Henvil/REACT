import React, { useState } from 'react';
import { Welcome } from './Welcome';

function InteractiveWelcome() {
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Nome e cognome"
      />
      <Welcome name={name} age={21} />
    </div>
  );
}

export default InteractiveWelcome;
