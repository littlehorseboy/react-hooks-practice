import React from 'react';

interface NumberListProps {
  numbers: number[];
}

function NumberList(props: NumberListProps): JSX.Element {
  return (
    <ul>
      {
        props.numbers.map((n): JSX.Element => (<li key={n}>{n}</li>))
      }
    </ul>
  );
}

export default function Container(): JSX.Element {
  return (
    <NumberList numbers={[1, 2, 3, 4, 5]} />
  );
}
