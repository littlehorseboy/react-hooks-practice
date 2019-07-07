import React from 'react';

interface Props {
  color: string;
  children: JSX.Element;
}

export default function FancyBorder(props: Props): JSX.Element {
  return (
    <div className={`FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
}
