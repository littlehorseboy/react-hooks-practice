import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useUserInfoStyles = makeStyles({
  userInfo: {
    border: '1px solid red',
  },
  avatar: {

  },
  userInfoName: {

  },
});

interface UserInfoProps {
  author: {
    name: string;
  };
}

function UserInfo(props: UserInfoProps): JSX.Element {
  const classes = useUserInfoStyles();

  return (
    <div className={classes.userInfo}>
      <img className={classes.avatar} src="https://source.unsplash.com/collection/190727/160x90" alt="img" />
      <div className={classes.userInfoName}>
        {props.author.name}
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  comment: {

  },
  commentText: {
    border: '1px solid blue',
  },
  commentDate: {
    border: '1px solid green',
  },
});

interface Props {
  author: {
    name: string;
  };
  text: string;
  date: Date;
}

function Comment(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.comment}>
      <UserInfo author={props.author} />

      <div className={classes.commentText}>
        {props.text}
      </div>

      <div className={classes.commentDate}>
        {props.date.toLocaleDateString()}
      </div>
    </div>
  );
}

export default function Container(): JSX.Element {
  return (
    <Comment author={{ name: 'horse' }} text="It is text." date={new Date()} />
  );
}
