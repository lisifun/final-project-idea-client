import { post } from "../services/authService";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

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
        navigate("/workspace");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="singup-page">
      <h1>Sign up</h1>

      <div className="form-singup">
        <div className="input-group">
          <form>
            <input
              className="input"
              id="fullName"
              name="fullName"
              type="text"
              value={newUser.fullName}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" htmlFor="fullName">
              Full name
            </label>
          </form>
        </div>
        <div className="input-group">
          <form>
            <input
              className="input"
              id="username"
              name="username"
              type="text"
              value={newUser.username}
              onChange={handleTextInput}
              required
            ></input>
            <label className="label" htmlFor="username">
              Username
            </label>
          </form>
        </div>
        <div className="input-group">
          <form>
            <input
              className="input"
              id="email"
              type="email"
              name="email"
              value={newUser.email}
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
              value={newUser.password}
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

{
  /* <Form>
<Form.Group className="mb-3">
  <div>Member's name</div>
  <Form.Control
    type="text"
    name="memberName"
    value={newMember.memberName}
    onChange={handleNewMemberInput}
    required
    placeholder="Member's name"
  />
</Form.Group>

<Form.Group className="mb-3" style={{ width: "50vw" }}>
  <div>Member's email</div>
  <Form.Control
    type="email"
    name="memberEmail"
    value={newMember.memberEmail}
    onChange={handleNewMemberInput}
    required
    placeholder="Member's email"
  />
</Form.Group>
</Form> */
}
