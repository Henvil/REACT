/*Using StrictMode, create a component with an effect that prints a message only 
when the component is mounted the first time. Use a ref to keep track of whether the component is mounted or not.*/

import React, { useEffect, useRef } from 'react';

export default function MessageRefs() {
  const h5Ref = useRef(false);

  useEffect(() => {
    h5Ref.current = true;
    console.log('Il componente è montato');

    return () => {
      h5Ref.current = false;
      console.log('Il componente è smontato');
    };
  }, []);

  return (
    <div>
      <h5>Componente test</h5>
    </div>
  );
}
