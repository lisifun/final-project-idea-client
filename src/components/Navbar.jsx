import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import DropdownFeature from "./DropdownFeature";
import DropdownContact from "./DropdownContact";

const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <Stack direction="horizontal" gap={5} className="navbar">
      <Link className="link" to="/">
        <div className="p-2">
          <div className="web-logo">
            <i className="fas fa-ticket-alt"></i>
            ticketflow
          </div>
        </div>
      </Link>
      <div className="p-2">
        <DropdownFeature />
      </div>

      <div className="p-2">
        <DropdownContact />
      </div>
      <div className="p-2 ms-auto">
        {!getToken() && (
          <>
            <Link to="/login" className="link">
              <Button variant="primary" className="loggin-button-home">
                Log in
              </Button>
            </Link>
          </>
        )}
      </div>
      <div className="p-2">
        {!getToken() && (
          <>
            <Link to="/signup" className="link">
              <Button className="singup-button" variant="primary">
                Sign up
              </Button>
            </Link>
          </>
        )}
      </div>

      <div className="p-2 ms-auto">
        {getToken() && (
          <>
            <Link to="/profile" className="link">
              <Button variant="primary" className="profile-button">
                Profile
              </Button>
            </Link>
          </>
        )}
      </div>
      <div className="p-2">
        {getToken() && (
          <>
            <Button
              variant="primary"
              className="logout-button"
              onClick={logOutUser}
            >
              Log out
            </Button>
          </>
        )}
      </div>
    </Stack>
  );
};

export default Navbar;
