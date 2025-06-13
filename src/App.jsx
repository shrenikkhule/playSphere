  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import Template from "./Layout/Template";
  import { HomePage } from "./Pages/Index";

  // import { LoaderProvider } from "./LoaderContext";

  function App() {
    return (
      // <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      // </LoaderProvider>
    );
  }

  export default App;
