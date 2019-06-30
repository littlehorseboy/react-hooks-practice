import React, { useState, useCallback } from 'react';

export default function Counter(): JSX.Element {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);
  const [thirdCount, setThirdCount] = useState(0);
  const [fourthCount, setFourthCount] = useState(0);

  const handleFirstCountClick = (): void => {
    setFirstCount(firstCount + 1);
  };

  const handleSecondCountClick = (n: number): void => {
    setSecondCount(secondCount + n);
  };

  const handleThirdCountClick = (n: number, e: React.MouseEvent): void => {
    setThirdCount(thirdCount + n);
  };

  const handleFourthCountClick = useCallback((n: number, e: React.MouseEvent): void => {
    setFourthCount(fourthCount + n);
  }, [fourthCount]);

  return (
    <>
      <div>
        <pre>
          {
            `const [firstCount, setFirstCount] = useState(0);

const handleFirstCountClick = (): void => {
  setFirstCount(firstCount + 1);
};

<button onClick={handleFirstCountClick}>`
          }
        </pre>
        <button onClick={handleFirstCountClick}>
          +1
        </button>
        <div>
          {firstCount}
        </div>

        <hr />

        <pre>
          {
            `const [secondCount, setSecondCount] = useState(0);

const handleSecondCountClick = (n: number): void => {
  setSecondCount(secondCount + n);
};

<button onClick={(): void => handleSecondCountClick(1)}>`
          }
        </pre>
        <button onClick={(): void => handleSecondCountClick(1)}>
          +1
        </button>
        <div>
          {secondCount}
        </div>

        <hr />

        <pre>
          {
            `const [thirdCount, setThirdCount] = useState(0);
            
const handleThirdCountClick = (n: number, e: React.MouseEvent): void => {
  setThirdCount(thirdCount + n);
};

<button onClick={handleThirdCountClick.bind(null, 1)}>`
          }
        </pre>
        <button onClick={handleThirdCountClick.bind(null, 1)}>
          +1
        </button>
        <div>
          {thirdCount}
        </div>

        <hr />

        <pre>
          {
            `const [fourthCount, setFourthCount] = useState(0);
            
const handleFourthCountClick = useCallback((n: number, e: React.MouseEvent): void => {
  setFourthCount(fourthCount + n);
}, [fourthCount]);

<button onClick={handleFourthCountClick.bind(null, 1)}>`
          }
        </pre>
        <button onClick={handleFourthCountClick.bind(null, 1)}>
          +1
        </button>
        <div>
          {fourthCount}
        </div>
      </div>
    </>
  );
}
