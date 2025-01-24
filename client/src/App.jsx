import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Foot";
import Spinner from "../src/component/Spinner";
import Consult from "./services/consult";
import Trainingpro from "./services/trainingpro";
import Presious from "./services/presioussys";
import Customeresearch from "./services/customresearch";
import AgriSolutions from "./services/AgriSolution";

import { ToastContainer } from "react-toastify";

// Lazy loading all route components
const Home = lazy(() => import("./component/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Research = lazy(() => import("./pages/Research"));
const News = lazy(() => import("./pages/News"));
const Collaborations = lazy(() => import("./pages/Collaborations"));
const Contact = lazy(() => import("./pages/Contact"));
const Virtual = lazy(() => import("./pages/Virtual"));
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Forum = lazy(() => import("./pages/Forum"));
const ViewThread = lazy(() => import("./pages/ForumViewThread"));
const CreateThread = lazy(() => import("./pages/ForumCreateThread"));
const SignUp = lazy(() => import("./pages/SignUp"));
const TicketDetail = lazy(() => import("./component/TicketDetail"));
const MyTicketList = lazy(() => import("./pages/MyTicketList"));
const CreateTicketPage = lazy(() => import("./pages/CreateTicketPage"));
const ResponseDashboard = lazy(() => import("./component/ResponseDashboard"));
const CourseList = lazy(() => import("./component/CourseList"));
const CourseDetails = lazy(() => import("./component/CourseDetails"));
const UserSettings = lazy(() => import("./pages/UserSettings"));
const DataRepository = lazy(() => import("./pages/DataRepository"));
const JitsiMeet = lazy(() => import("./component/JitsiMeet"));
const MediaPage = lazy(() => import("./pages/MediaPage"));
const DocumentsPage = lazy(() => import("./pages/DocumentsPage"));
const ViewAllStories = lazy(() => import("./component/ViewAllStories"));
const trainingpro = lazy(() => import("./services/trainingpro"));
const presioussys = lazy(() => import("./services/presioussys"));
const consult = lazy(() => import("./services/consult"));
const customresearch = lazy(() => import("./services/customresearch"));
const VirtualTour3d = lazy(() => import("./component/VirtualTour3d"));
const UserForm = lazy(() => import("./pages/UserForm"));
const PolicySection = lazy(() => import("./pages/PolicySection"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const ResearchPortal = lazy(() => import("./pages/ResearchPortal"));
const AiToolPage = lazy(() => import("./pages/AiToolPage"));
const AquaForecastTool = lazy(() => import("./pages/AquaForecastTool"));

//protect routes component
import ProtectRoute from "./component/ProtectRoute";
import ProtectAdminRoute from "./component/ProtectAdminRoute";

function AppContent() {
  const location = useLocation();

  //We can hide navbar in the pages we don't want it using this way ->
  const [showNavbar, setShowNavbar] = useState(true);
  // Hide the Navbar on /dashboard route
  useEffect(() => {
    setShowNavbar(location.pathname !== "/dashboard");
  }, [location.pathname]);

  // protect route use this:
  // <Route element={<ProtectRoute />}></Route>;

  // to protect admin route use this:
  // <Route element={<ProtectAdminRoute />}></Route>;

  return (
    <>
      {showNavbar && <Navbar />}
      <ToastContainer />
      <Suspense fallback={<Spinner />}>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-1" element={<Consult />} />
            <Route path="/services-2" element={<Customeresearch />} />
            <Route path="/services-4" element={<Presious />} />
            <Route path="/services-3" element={<Trainingpro />} />
            <Route path="/services-5" element={<AgriSolutions />} />
            <Route path="/research" element={<Research />} />
            <Route path="/news" element={<News />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/virtual" element={<Virtual />} />
            <Route element={<ProtectRoute />}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<ProtectRoute />}>
              <Route path="/setting" element={<UserSettings />} />
            </Route>

            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/thread/:id" element={<ViewThread />} />
            <Route path="/forum/create" element={<CreateThread />} />
            <Route element={<ProtectRoute />}>
              <Route path="/ticketlist" element={<MyTicketList />} />
            </Route>
            <Route element={<ProtectRoute />}>
              <Route path="/tickets/:id" element={<TicketDetail />} />
            </Route>

            <Route element={<ProtectRoute />}>
              <Route path="/create-ticket" element={<CreateTicketPage />} />
            </Route>
            <Route element={<ProtectAdminRoute />}>
              <Route
                path="/response-dashboard"
                element={<ResponseDashboard />}
              />
            </Route>

            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/data-repo" element={<DataRepository />} />
            <Route element={<ProtectRoute />}>
              <Route path="/video-conf" element={<JitsiMeet />} />
            </Route>
            <Route element={<ProtectRoute />}>
              <Route path="/reload-video-conf" element={<JitsiMeet />} />
            </Route>

            <Route path="/all-stories" element={<ViewAllStories />} />
            <Route path="/policies" element={<PolicySection />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/virtualtour3d" element={<VirtualTour3d />} />
            <Route path="/admindash" element={<AdminDashboard />} />
            <Route path="/ticket/:id" element={<TicketDetail />} />

            <Route path="/aitools" element={<ResearchPortal/>}> </Route>
            <Route path="/aitools/:toolName" element={<AiToolPage/>} > </Route>
            <Route path="/aqua-forecast-tool" element={<AquaForecastTool />} />


          </Routes>
          <Footer />
        </main>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
