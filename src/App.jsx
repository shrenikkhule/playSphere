import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "./Layout/Template";
import {
  AllVenues,
  BookVenues,
  Deals,
  Events,
  FindPlayers,
  HomePage,
  Trainer,
  Venues,
} from "./Pages/Index";

// import { LoaderProvider } from "./LoaderContext";

function App() {
  return (
    // <LoaderProvider>
    <BrowserRouter>
      <Routes>
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
        </Route>
      </Routes>
    </BrowserRouter>

    // </LoaderProvider>
  );
}

export default App;
