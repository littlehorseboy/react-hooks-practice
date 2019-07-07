import React from 'react';
import FancyBorder from '../children/FancyBorder';

interface Props {
  title: string;
  message: string;
  children: JSX.Element;
}

export default function Dialog(props: Props): JSX.Element {
  return (
    <FancyBorder color="red">
      <>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
        {props.children}
      </>
    </FancyBorder>
  );
}
