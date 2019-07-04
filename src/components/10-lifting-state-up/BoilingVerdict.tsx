import React, { useState } from 'react';

interface BoilingVerdictProps {
  celsius: number;
}

export default function BoilingVerdict(props: BoilingVerdictProps): JSX.Element {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>The water would not boil</p>;
}
