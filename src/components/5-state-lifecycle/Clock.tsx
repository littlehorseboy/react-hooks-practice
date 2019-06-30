import React, { useState, useEffect } from 'react';

let tick: ReturnType<typeof setInterval>;

function Clock(): JSX.Element {
  const [date, setDate] = useState(new Date());


  useEffect((): () => void => {
    tick = setInterval((): void => {
      setDate(new Date());
    }, 1000);

    return (): void => {
      clearInterval(tick);
    };
  }, []);

  return (
    <h1>It is {date.toLocaleTimeString()}</h1>
  );
}

export default function Container(): JSX.Element {
  return (
    <>
      <Clock />
      <Clock />
      <Clock />
      <Clock />
    </>
  );
}
