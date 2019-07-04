import React, { useState } from 'react';

export default function Reservation(): JSX.Element {
  const [isGoing, setIsGoing] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(2);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    if (event.target.type === 'checkbox') {
      setIsGoing(event.target.checked);
    } else {
      setNumberOfGuests(Number(event.target.value));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert(`isGoing = ${isGoing}
numberOfGuests = ${numberOfGuests}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Is going:
        <input type="checkbox" name="isGoing" checked={isGoing} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input type="number" name="numberOfGuests" value={numberOfGuests} onChange={handleInputChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
