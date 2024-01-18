import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import { AuthContext } from "../context/auth.context";
import { SERVER_URL } from "../services/SERVER_URL";

import Button from "react-bootstrap/Button";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [allWorkspaces, setAllWorkspaces] = useState(null);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/workspaces`)
      .then((response) => {
        setAllWorkspaces(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTextInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    post("/auth/login", user)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate(`/dashboard/${allWorkspaces[0]._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <h1>Log in to TicketFlow</h1>
      <div className="form-login">
        <div className="input-group">
          <form>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" htmlFor="email">
              Email adress
            </label>
          </form>
        </div>
        <div className="input-group">
          <form>
            <input
              className="input"
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" htmlFor="password">
              Password
            </label>
          </form>
        </div>
      </div>

      <Button
        className="login-button"
        type="submit"
        onClick={handleSubmit}
        variant="primary"
      >
        Log in
      </Button>
    </div>
  );
};

export default Login;
