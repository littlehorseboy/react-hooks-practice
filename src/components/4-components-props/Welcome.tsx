import React from 'react';

interface Props {
  name: string;
}

function Welcome(props: Props): JSX.Element {
  return <h1>Hello, {props.name}</h1>;
}

export default function Container(): JSX.Element {
  return (
    <>
      <Welcome name="ㄎㄎ" />
      <Welcome name="ㄏㄏ" />
      <Welcome name="ㄌㄌ" />
    </>
  );
}
