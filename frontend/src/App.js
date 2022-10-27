import "./App.css";
import {
  HomePage,
  CreateVideogameForm,
  NotFoundPage,
  ViewVideogamePage,
  EditVideogamePage,
} from "./pages/Index";
import { Navbar } from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { VideogameProvider } from "./context/videogameContext";
import { Toaster } from "react-hot-toast";
import { BubblyContainer } from "react-bubbly-transitions";

function App() {
  return (
    <div className="parent-container">
      <BrowserRouter>
        <BubblyContainer />
        <Navbar />
        <div className="children-container">
          <VideogameProvider>
            <Toaster />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newVideogame" element={<CreateVideogameForm />} />
              <Route
                path="/viewVideogame/:id"
                element={<ViewVideogamePage />}
              />
              <Route
                path="/editVideogame/:id"
                element={<EditVideogamePage />}
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </VideogameProvider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
