import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <Stack direction="horizontal" gap={5} className="navbar">
      <Link className="link" to="/">
        <div className="p-2">
          <div>
            <i className="fas fa-ticket-alt"></i>
            ticketflow
          </div>
        </div>
      </Link>
      <div className="p-2">
        <Dropdown className="dropdown-features">
          <Dropdown.Toggle id="features">Features</Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-features">
            <div>
              <i className="fas fa-ticket-alt"></i>Tickets<br></br>{" "}
              <p>Track your work</p>
            </div>

            <div>
              <i className="fas fa-briefcase"></i>
              Projects<br></br> <p>Collaborate on big ideas</p>
            </div>

            <div>
              <i className="far fa-calendar"></i>
              Calendar<br></br> <p>Plan your product</p>
            </div>

            <div>
              <i className="far fa-comment-dots"></i>
              Comments<br></br> <p>Communicate with your team members</p>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle id="contact">Contact</Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-contact">
            <div>
              <i className="fas fa-phone"></i>(425)546-6197
            </div>

            <div>
              <i className="fas fa-envelope"></i>lisandrafj99@gmail.com
            </div>

            <div>
              <i className="fab fa-github"></i>lisifun
            </div>

            <div>
              <i className="fab fa-linkedin"></i>lisandrafj99@gmail.com
            </div>
          </Dropdown.Menu>
        </Dropdown>
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
              {" "}
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
