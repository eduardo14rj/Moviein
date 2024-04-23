import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Principal from "./pages/layout/Principal";
import PageValidate from "./pages/validate/PageValidate";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />

      <Route path="/a" element={<PageValidate />}>
        <Route index element={<Principal />} />
      </Route>
    </Routes>
  );
}

export default App;
