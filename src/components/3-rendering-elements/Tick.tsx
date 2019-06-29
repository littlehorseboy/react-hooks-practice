import React, { useState, useEffect } from 'react';

export default function Tick(): JSX.Element {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  useEffect((): void => {
    setInterval((): void => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <h1>It is {date}</h1>
  );
}
