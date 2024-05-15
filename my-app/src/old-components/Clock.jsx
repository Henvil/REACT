import { useEffect, useState, useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import './index.scss';

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="clock">
      <p className="currentTime">
        {language === 'en' ? 'Current time is:' : 'Ora attuale:'}
      </p>
      <span className="time">{date.toLocaleTimeString()}</span>
    </h2>
  );
}
