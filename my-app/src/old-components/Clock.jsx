import { useEffect, useState } from 'react';

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div>
      <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
