import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../lib/apiRequest";

const ViewThread = () => {
  const [message, setMessage] = useState("");
  const [thread, setThread] = useState(null);
  const [reply, setReply] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getThread = async () => {
      try {
        const response = await apiRequest.get(`/threads/${id}`);
        setThread(response.data);
      } catch (error) {
        console.error("Error in getting thread: ", error);
        setMessage(error.response?.data?.message || "Error in loading thread!");
      }
    };
    getThread();
  }, [id, thread?.replies]);

  const handleReply = async (e) => {
    e.preventDefault();
    const formdata = {
      reply: reply,
    };
    const response = await apiRequest.put(`/threads/reply/${id}`, formdata);
    setMessage(response.data?.message || "Reply added.");
    setReply("");
    setTimeout(() => {
      setMessage("");
    }, 5000);
    try {
    } catch (error) {
      console.error("Error in adding reply!", error);
      setMessage(error.response?.data?.message || "Error in adding reply");
    }
  };

  if (!thread) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading thread...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-4 mb-2">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {thread.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{thread.description}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Replies</h3>
        <ul className="space-y-4 h-[10rem] overflow-y-scroll">
          {thread.replies && thread.replies.length > 0 ? (
            thread.replies.map((reply, index) => (
              <li key={index} className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-gray-700">{reply}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No replies yet.</p>
          )}
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Write a Reply
        </h3>
        <form className="space-y-4" onSubmit={handleReply}>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a reply..."
            name="reply"
            onChange={(e) => setReply(e.target.value)}
            value={reply}
          />
          {message && (
            <div className="flex justify-center items-center ">
              <p className="text-red-500 text-lg">{message}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Reply
          </button>
        </form>
      </div>
    </div>
  );
};

export default ViewThread;
