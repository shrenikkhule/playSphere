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
            path="trainer-details/:id"
            element={<TrainerDetails />}
          ></Route>
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>

    // </LoaderProvider>
  );
}

export default App;
