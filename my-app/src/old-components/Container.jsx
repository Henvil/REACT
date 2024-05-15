import { useState } from 'react';

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapseButton() {
    setCollapsed((statoAttuale) => !statoAttuale);
  }

  return (
    <div className="appContainer">
      <div className="appTitle">{title}</div>
      <button onClick={handleCollapseButton}>Mostra contenuto</button>
      {collapsed && <div className="appContent">{children}</div>}
    </div>
  );
}
