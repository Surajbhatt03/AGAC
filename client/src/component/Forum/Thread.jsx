import React from 'react';

const Thread = ({ thread }) => (
  <div>
    <h2>{thread.title}</h2>
    <p>{thread.content}</p>
  </div>
);

export default Thread;
