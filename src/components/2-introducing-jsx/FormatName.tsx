import React from 'react';

interface UserInterface {
  firstName: string;
  lastName: string;
}

const userObj: UserInterface = {
  firstName: 'handsome',
  lastName: 'horse',
};

const formatName = (user: UserInterface): string => `${user.firstName} ${user.lastName}`;

export default function FormatName(): JSX.Element {
  if (userObj.firstName === 'handsome') {
    return (
      <h1>Hello, {formatName(userObj)}</h1>
    );
  }
  return (
    <h1>Hello,Stranger</h1>
  );
}
