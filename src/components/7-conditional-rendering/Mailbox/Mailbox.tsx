import React from 'react';

interface Props {
  unreadMessage: string[];
}

function Mailbox(props: Props): JSX.Element {
  return (
    <div>
      <h1>Hello!</h1>
      {
        props.unreadMessage.length > 0
          && <h2>You have {props.unreadMessage.length} unread messages.</h2>
      }
    </div>
  );
}

const messages: string[] = ['123'];

export default function Container(): JSX.Element {
  return <Mailbox unreadMessage={messages} />;
}
