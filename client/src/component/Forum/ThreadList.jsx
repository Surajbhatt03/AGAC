import React from 'react';
import { Link } from 'react-router-dom';

const ThreadList = ({ threads }) => (
  <div>
    <h2>Discussion Threads</h2>
    <ul>
      {threads.map(thread => (
        <li key={thread.id}>
          <Link to={`/thread/${thread.id}`}>{thread.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ThreadList;
