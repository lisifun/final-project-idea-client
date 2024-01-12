import { post } from "../services/authService";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Form from "react-bootstrap/Form";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTextInput = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    post("/auth/login", user)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <h1>Log in to TicketFlow</h1>
      <Form onSubmit={handleSubmit} className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Email address<sup>*</sup>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleTextInput}
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
      <button type="submit" onClick={handleSubmit}>
        Log in
      </button>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleTextInput}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleTextInput}
          />
        </label>

        <button type="submit">Login</button>
      </form> */}
    </div>
  );
};

export default Login;
