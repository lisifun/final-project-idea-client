import { post } from "../services/authService";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {
  const [newUser, setNewUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTextInput = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    post("/auth/signup", newUser)
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
    <div className="singup-page">
      <h1>Sign up</h1>

      <Form onSubmit={handleSubmit} className="form-singup">
        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>
            Full name<sup>*</sup>
          </Form.Label>
          <Form.Control
            name="fullName"
            type="text"
            value={newUser.fullName}
            onChange={handleTextInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>
            Username<sup>*</sup>
          </Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={newUser.username}
            onChange={handleTextInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Email address<sup>*</sup>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={newUser.email}
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
            value={newUser.password}
            onChange={handleTextInput}
          />
        </Form.Group>
      </Form>

      <Button
        className="singup-button"
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
        variant="primary"
      >
        Sign up
      </Button>
    </div>
  );
};

export default Signup;
