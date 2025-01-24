import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import "../styles/UserSettings.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserSettings = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [userId, setUserId] = useState("");
  // const [currentProfileImage, setCurrentProfileImage] = useState(""); // For displaying current profile image
  const { currentUser, updateUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch user data from API and set initial state (example placeholder)
    const fetchUserData = async () => {
      const userData = {
        fullname: currentUser.fullname,
        username: currentUser.username,
        email: currentUser.email,
        // profileImage: "https://example.com/current-profile.jpg", // Example URL
      };
      setFullname(userData.fullname);
      setUsername(userData.username);
      setEmail(userData.email);
      setUserId(currentUser._id);
      // setCurrentProfileImage(userData.profileImage);
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      id: userId,
      fullname: fullname,
      username: username,
      email: email,
      currentPassword: currentPassword,
      newPassword: newPassword,
    };
    try {
      const response = await apiRequest.put("/auth/update", formdata);
      setMessage(response.data.message);
      setTimeout(() => {
        const handleLogout = async () => {
          try {
            const response = await apiRequest.post("/auth/logout");

            setMessage(response.data.message);
            setTimeout(() => {
              updateUser(null);
              navigate("/login");
            }, 1000);
          } catch (error) {
            console.error(error);
            setMessage(error.response.data.message);
          }
        };
        handleLogout();
      }, 1000);
    } catch (error) {
      console.error("Error in updating profile: ", error);
      setMessage(error.response?.data?.message || "Error in updating profile");
    }
  };

  // const handleImageChange = (e) => {
  //   setProfileImage(URL.createObjectURL(e.target.files[0]));
  // };

  return (
    <main>
      <div className="settings-container">
        <h2>User Settings</h2>
        <form
          onSubmit={handleSubmit}
          className={`settings-form ${isEditing ? "flex" : "hidden"}`}
        >
          {/* <div className="profile-image-container">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-image" />
            ) : (
              <img
                src={currentProfileImage}
                alt="Profile"
                className="profile-image"
              />
            )}
            {isEditing && (
              <>
                <label htmlFor="profile-image">Profile Image:</label>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </>
            )}
          </div> */}

          <>
            <label htmlFor="fullname">Fullname:</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your fullname"
            />

            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <label htmlFor="currentPassword">Current Password:</label>
            <input
              type="currentPassword"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter your current password"
              className="p-3 border border-solid border-black border-opacity-20 rounded-md"
            />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter your New password"
              className="p-3 border border-solid border-black border-opacity-20 rounded-md"
            />

            {message && (
              <div className="text-xl my-4 text-center mx-auto text-red-500 font-semibold">
                {message}
              </div>
            )}
          </>
          <>
            <button type="submit">Save Changes</button>
            <Link
              to={"/dashboard"}
              className="bg-red-500 text-white p-2 text-xl text-center mx-auto w-24 rounded-md hover:bg-red-600"
            >
              Cancel
            </Link>
          </>
        </form>
      </div>
    </main>
  );
};

export default UserSettings;
