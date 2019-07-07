import React from 'react';
import SplitPane from './SplitPane';

export default function SplitPaneContainer(): JSX.Element {
  return (
    <SplitPane
      topPane={
        <div>Top</div>
      }
      bottomPane={
        <div>Bottom</div>
      }
    ></SplitPane>
  );
}
