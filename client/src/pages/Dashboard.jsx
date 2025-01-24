import React, { useContext, useState, useEffect } from "react";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import FAQAccordion from "../component/Faq";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Navbar.css";

import img1 from "./../../images/logo (2).png";
import img2 from "./../../images/TwitLogo.png";
import img3 from "./../../images/Fblogo.png";
import img4 from "./../../images/tiktoklogo.jfif";
import img5 from "./../../images/InstaLogo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const { updateUser, currentUser } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is AGAL?",
          answer:
            "AGAL is the AquaGenetics AI Labs, a subsidiary of Phoenix Labs focused on integrating AI and aquaculture to address health and food production challenges.",
        },
        {
          question: "How can I collaborate with AGAL?",
          answer:
            "Visit the Collaborations section on the platform for partnership opportunities and contact information.",
        },
      ],
    },
    {
      category: "Technical Questions",
      questions: [
        {
          question: "How do I access the AI tools?",
          answer:
            "AI tools are accessible through the AI-Powered Research Portal on the user dashboard.",
        },
        {
          question: "Where can I find research publications?",
          answer:
            "Research publications are available in the Publications section under Research on the platform.",
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const handleLogout = async () => {
    try {
      const response = await apiRequest.post("/auth/logout");

      toast.success(response.data.message);
      setTimeout(() => {
        updateUser(null);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
        setIsToggled(false); // Reset toggle state when not on a small screen
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="half-nav">
        <div className="Navbar-1">
          <div className="logo">
            <img src={img1} alt="Logo" />
          </div>
          <div className="ele">
            <a
              href="https://x.com/PhoenixLab94718"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img2} alt="Twitter Logo" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100085708352952&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img3} alt="Facebook Logo" />
            </a>
            <a
              href="https://www.tiktok.com/@phoenix.labs?_t=8pa6ddNvsRR&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img4} className="mt-2" alt="Tiktok Logo" />
            </a>
            <a
              href="https://www.instagram.com/phoenixlabs1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img5} alt="Instagram Logo" />
            </a>
          </div>
          <div className="contact-us">
            <div className="cont">
              <div className="head1">(Available 9 AM - 5 PM EST)</div>
              <div className="head2">+1-800-123-4567</div>
            </div>
            <div className="email">
              <div className="head1">Send email</div>
              <div className="head2">support@agal.com</div>
            </div>
            <div className="loc">
              <div className="head1">Address</div>
              <div className="head2">Dallas, United States</div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        <aside className="w-full md:w-1/4 bg-white p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex items-center justify-center py-4 md:py-8">
            <div className="text-2xl md:text-4xl font-bold text-green-600">
              AGAL
            </div>
          </div>
          <nav>
            <ul className="space-y-4 md:space-y-10">
              <li className="flex items-center space-x-2 text-lg md:text-xl">
                <span className="text-green-600 ">User Dashboard</span>
                {isSmallScreen && (
                  <button
                    className="text-red-500 hover:text-gray-700"
                    onClick={handleToggle}
                  >
                    <FontAwesomeIcon
                      icon={isToggled ? faChevronUp : faChevronDown}
                    />
                  </button>
                )}
              </li>
              {(isToggled || !isSmallScreen) && (
                <>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/aitools"}>AI-Powered Research Portal</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                  <Link to={"/video-conf"}>Phoenix Uplink™</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/data-repo"}>Genomic Data</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/virtualtour3d"}>Virtual Labs</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/news"}>Events</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/documents"}>Resources</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/ticketlist"}>Support</Link>
                  </li>
                  <li className="flex items-center space-x-2 text-lg md:text-xl text-gray-500 hover:text-black cursor-pointer">
                    <Link to={"/setting"}>Settings</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </aside>

        <div className="flex-grow p-4 md:p-8">
          <header className="flex flex-col md:flex-row items-center justify-between mb-4 md:mb-8">
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-semibold">
                Welcome, {currentUser.fullname}
              </h1>
              <p className="text-black">Explore the AGAL dashboard</p>
            </div>
            {/* <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-700">Hello, {currentUser.username}</span>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div> */}
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="col-span-1 bg-white p-4 md:p-6 rounded-lg shadow">
              <div className="text-center mb-4">
                {/* Profile image placeholder */}
              </div>
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                  alt={currentUser.fullname}
                  className="w-20 h-20 rounded-full mx-auto overflow-hidden"
                />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
                  My Profile
                </h2>
                {message && (
                  <p className="error text-red-500 my-0 text-sm font-semibold text-center">
                    {message}
                  </p>
                )}
                <div className="mt-4 md:mt-6 space-y-2 md:space-y-4 text-center text-base md:text-lg">
                  <p className="font-medium">{currentUser.fullname}</p>
                  <p className="break-words">{currentUser.email}</p>
                  <div className="flex justify-center items-center space-x-2">
                    <span className="text-green-500 font-semibold">
                      SMS alerts activation
                    </span>
                    <div className="bg-green-500 w-4 h-4 md:w-5 md:h-5 rounded-full"></div>
                  </div>
                </div>
                <Link
                  to={"/setting"}
                  className="bg-green-600 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-full mt-6 md:mt-10 block mx-auto w-3/4 text-center text-base md:text-lg font-semibold"
                >
                  Profile Settings
                </Link>

                <button
                  className="bg-red-600 hover:bg-red-500 text-white py-2 md:py-3 px-6 md:px-8 rounded-full mt-4 block mx-auto text-base md:text-lg font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <Link
                  to={"/"}
                  className="bg-sky-500 text-white py-2 px-4 md:py-2.5 md:px-5 rounded-full mt-6 md:mt-4 block mx-auto w-3/4 text-center text-base md:text-lg font-semibold"
                >
                  Return to Home
                </Link>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 space-y-4 md:space-y-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-4">
                  Recent Activities
                </h2>
                <p className="text-gray-500">
                  A timeline of recent activities, including research
                  contributions, forum posts, and collaboration updates.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-4">
                  Research Highlights
                </h2>
                <p className="text-gray-500">
                  Latest research highlights and publications relevant to user's
                  interests.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-4">
                  Upcoming Events
                </h2>
                <p className="text-gray-500">
                  List of upcoming events with registration links and event
                  details.
                </p>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-2 md:mb-4">
                  Your Projects
                </h2>
                <p className="text-gray-500">
                  Overview of user's projects, including progress updates and
                  collaboration opportunities.
                </p>
              </div>
              <FAQAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
