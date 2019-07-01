import React from 'react';

interface ListItemProps {
  value: number;
}

function ListItem(props: ListItemProps): JSX.Element {
  return <li>{props.value}</li>;
}

interface NumberListProps {
  numbers: number[];
}

function NumberList(props: NumberListProps): JSX.Element {
  return (
    <ul>
      {
        props.numbers.map((n): JSX.Element => <ListItem key={n} value={n} />)
      }
    </ul>
  );
}

export default function Container(): JSX.Element {
  return (
    <NumberList numbers={[1, 2, 3, 4, 5]} />
  );
}
