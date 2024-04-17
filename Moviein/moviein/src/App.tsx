import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/Index";
import Login from "./pages/Auth/Login";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
