import { post } from "../services/authService";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { SERVER_URL } from "../services/SERVER_URL";

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
      <Form className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Email address<sup>*</sup>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleTextInput}
            className="input"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Password<sup>*</sup>
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={user.password}
            onChange={handleTextInput}
          />
        </Form.Group>
      </Form>

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
