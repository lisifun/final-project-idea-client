import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <Stack direction="horizontal" gap={5} className="navbar">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="p-2">
          <div style={{ color: "white" }}>
            {" "}
            <i className="fas fa-ticket-alt"></i>
            ticketflow
          </div>
        </div>
      </Link>
      <div className="p-2">
        <Dropdown>
          <Dropdown.Toggle
            id="features"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            Features
          </Dropdown.Toggle>

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
          <Dropdown.Toggle
            id="features"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            Contact
          </Dropdown.Toggle>

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
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                Log in
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="p-2">
        {!getToken() && (
          <>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button>Sign up</button>
            </Link>
          </>
        )}
      </div>

      <div className="p-2 ms-auto">
        {getToken() && (
          <>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              {" "}
              <button>Profile</button>
            </Link>
          </>
        )}
      </div>
      <div className="p-2">
        {getToken() && (
          <>
            <button onClick={logOutUser}>Logout</button>
          </>
        )}
      </div>
    </Stack>

    //   <div>
    // {!getToken() && (
    //   <>
    //     <Link to="/login">
    //       <Button variant="primary">Log in</Button>
    //     </Link>

    //     <Link to="/signup">
    //       <Button variant="primary">Sign up</Button>
    //     </Link>
    //   </>
    // )}
    //   </div>

    //   <div>
    // {getToken() && (
    //   <>
    //     <Link to="/profile">Profile</Link>

    // <Button variant="primary" onClick={logOutUser}>
    //   Logout
    // </Button>
    //   </>
    // )}
    //   </div>

    //   <hr style={{ color: "black", width: "100%" }}></hr>

    //   {/* <nav>
    //     {!getToken() && (
    //       <>
    //         <Link to="/login">Login</Link>
    //         <Link to="/signup">Signup</Link>
    //       </>
    //     )}

    //     {getToken() && (
    //       <>
    //         <Link to="/profile">Profile</Link>
    //         <button onClick={logOutUser}>Logout</button>
    //       </>
    //     )}
    //   </nav> */}
    // </div>
  );
};

export default Navbar;
