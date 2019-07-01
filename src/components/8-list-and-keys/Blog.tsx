import React from 'react';

interface BlogProps {
  posts: {
    id: number;
    title: string;
    content: string;
  }[];
}

function Blog(props: BlogProps): JSX.Element {
  return (
    <div>
      <ul>
        {props.posts.map((post): JSX.Element => <li key={post.id}>{post.title}</li>)}
      </ul>
      <hr />
      {props.posts.map((post): JSX.Element => <div key={post.id}>
        <h3>{post.title}</h3>
        <h3>{post.content}</h3>
      </div>)}
    </div>
  );
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

export default function Container(): JSX.Element {
  return (
    <Blog posts={posts} />
  );
}
