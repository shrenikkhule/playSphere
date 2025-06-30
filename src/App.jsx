<<<<<<< HEAD
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Template from "./Layout/Template";
import { HomePage } from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { LoaderProvider } from "./LoaderContext";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import CoachDashboard from "./Pages/Dashboard/CoachDashboard";
import PlayerDashboard from "./Pages/Dashboard/PlayerDashboard";
import OwnerDashboard from "./Pages/Dashboard/OwnerDashboard";
import AcademyDashboard from "./Pages/Dashboard/AcademyDashboard";

function App() {
  // const user = JSON.parse(localStorage.getItem("user"));
  // const role = user?.role;
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/turf owner" element={<OwnerDashboard />} />
          <Route path="/academies" element={<AcademyDashboard />} />
          <Route path="/player" element={<PlayerDashboard />} />
          <Route path="/coach" element={<CoachDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* <Route path="/dashboard" element={
            role === "admin" ? <AdminDashboard /> :
              role === "coach" ? <CoachDashboard /> :
                role === "player" ? <PlayerDashboard /> :
                  role === "turf owner" ? <OwnerDashboard /> :
                    role === "academies" ? <AcademyDashboard /> :
                      <Navigate to="/login" />
          } /> */}


          {/* Nested routes inside layout */}
          <Route path="/" element={<Template />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>

        {/* Black theme toast notification */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </LoaderProvider>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./Layout/Template";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AllVenues,
  BookVenues,
  Deals,
  Events,
  FindPlayers,
  HomePage,
  Trainer,
  TrainerDetails,
  Venues,
} from "./Pages/Index";

// import { LoaderProvider } from "./LoaderContext";

function App() {
  return (
    // <LoaderProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Template />}>
          <Route index element={<HomePage />} />
          <Route path="find-players" element={<FindPlayers />} />
          <Route path="book-venues" element={<BookVenues />}>
            <Route index element={<AllVenues />} />
            <Route path="all" element={<Venues />} />
            <Route path="events" element={<Events />} />
            <Route path="deals" element={<Deals />} />
          </Route>
          <Route path="trainer" element={<Trainer />}></Route>
          <Route
            path="trainer/trainer-details"
            element={<TrainerDetails />}
          ></Route>
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>

    // </LoaderProvider>
>>>>>>> 6d82c06a62d2c12e013f53f0fccaeba49ba6b95b
  );
}

export default App;
