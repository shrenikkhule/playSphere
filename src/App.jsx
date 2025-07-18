import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Template from "./Layout/Template";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { LoaderProvider } from "./LoaderContext";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import CoachDashboard from "./Pages/Dashboard/CoachDashboard";
import PlayerDashboard from "./Pages/Dashboard/PlayerDashboard";
import OwnerDashboard from "./Pages/Dashboard/TurfOwnwer/OwnerDashboard";
import AcademyDashboard from "./Pages/Dashboard/AcademyDashboard";

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
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import ProfilePage from "./Pages/Dashboard/Components/ProfilePage";
import AddVenue from "./Pages/Dashboard/TurfOwnwer/AddVenues";
import AllVenuesDashboard from "./Pages/Dashboard/TurfOwnwer/AllVenues";

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
          {/* Dashboard routes  */}
          <Route path="dashboard" element={<DashboardPage />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="turf owner" element={<OwnerDashboard />} />
            <Route path="turf owner/add-venues" element={<AddVenue />} />
            <Route
              path="turf owner/all-venues"
              element={<AllVenuesDashboard />}
            />
            <Route path="academies" element={<AcademyDashboard />} />
            <Route path="player" element={<PlayerDashboard />} />
            <Route path="coach" element={<CoachDashboard />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Nested routes inside layout */}
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
  );
}

export default App;
