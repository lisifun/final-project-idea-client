import "bootstrap/dist/css/bootstrap.min.css";

import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import Footer from "./components/Footer";
import WorkspacePage from "./pages/WorkspacePage";
import TicketDetailsPage from "./pages/TicketDetailsPage";
import WorkspaceDetailsPage from "./pages/WorkspaceDetailsPage";

function App() {
  const { getToken } = useContext(AuthContext);

  const IsLoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const IsLoggedOut = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<IsLoggedOut />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<IsLoggedIn />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/dashboard/:workspaceId"
            element={<DashboardPage />}
          ></Route>
          <Route path="/workspace" element={<WorkspacePage />}></Route>
          <Route
            path="/dashboard/:workspaceId/:ticketId/details"
            element={<TicketDetailsPage />}
          ></Route>
          <Route
            path="/dashboard/:workspaceId/details"
            element={<WorkspaceDetailsPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
