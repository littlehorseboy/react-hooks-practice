import React from 'react';
import FancyBorder from './FancyBorder';

export default function WelcomeDialog(): JSX.Element {
  return (
    <FancyBorder color="red">
      <h1>Welcome</h1>
    </FancyBorder>
  );
}
