import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Forum.css";
import apiRequest from "../lib/apiRequest";

const Forum = () => {
  const [threads, setThreads] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await apiRequest.get("/threads/");
        if (response.data) setThreads(response.data);
      } catch (error) {
        console.error("Error loading threads: ", error);
        setMessage(error.response?.message || "Error loading threads");
      }
    };
    fetchThreads();
  }, []);

  return (
    <div className="home">
      <h1 className="text-3xl font-semibold text-center mt-4 ">
        Welcome to the Research Forum
      </h1>
      <div className="thread-list">
        <ul className="items-center mx-auto">
          {threads ? (
            threads.map((thread) => (
              <li key={thread._id}>
                <Link to={`/forum/thread/${thread._id}`}>
                  <h3>{thread.title}</h3>
                  <p>{thread.description}</p>
                </Link>
              </li>
            ))
          ) : (
            <div className="text-3xl font-semibold text-green-500 text-center my-20">
              {message ? <div>{message}</div> : <h1>Loading Threads ...</h1>}
            </div>
          )}
        </ul>
      </div>
      <div className="create-thread">
        <Link to="/forum/create">Create New Thread</Link>
      </div>
    </div>
  );
};

export default Forum;
