import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  comment: {

  },
  userInfo: {

  },
  avatar: {
    height: 200,
  },
  userInfoName: {

  },
  commentText: {

  },
  commentData: {

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
      <div className={classes.userInfo}>
        <img className={classes.avatar} src="https://source.unsplash.com/random" alt="img" />
        <div className={classes.userInfoName}>
          {props.author.name}
        </div>
      </div>

      <div className={classes.commentText}>
        {props.text}
      </div>

      <div className={classes.commentData}>
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
