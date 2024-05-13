import { useEffect, useState } from 'react';
import './index.scss';

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  return (
    <h2 className="clock">
      <p className="currentTime">Current time:</p>
      <span className="time">{date.toLocaleTimeString()}</span>
    </h2>
  );
}
