export function AlertClock() {
  function handleButtonClick() {
    const now = new Date();

    alert(`L'orario corrente è ${now.toLocaleTimeString()}`);
  }

  return (
    <div>
      <p>Clicca il pulsante sottostante per mostrare l'orario!</p>
      <button onClick={handleButtonClick}>Cliccami!</button>
    </div>
  );
}
