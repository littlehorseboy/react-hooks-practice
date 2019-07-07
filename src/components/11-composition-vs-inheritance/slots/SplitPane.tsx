import React from 'react';

interface Props {
  topPane: JSX.Element;
  bottomPane: JSX.Element;
}

export default function SplitPane(props: Props): JSX.Element {
  return (
    <div>
      <div>
        {props.topPane}
      </div>
      <div>
        {props.bottomPane}
      </div>
    </div>
  );
}
