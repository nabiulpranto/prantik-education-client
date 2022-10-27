import React, { useContext } from "react";
import MenuBar from "../Shared/MenuBar/MenuBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import Footer from "../Shared/Footer/Footer";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error", error);
        setError(error.message);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
  };

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email address..");
    }
    sendPasswordResetEmail(auth, userEmail).then(() => {
      alert("Please check your email & reset password");
    });
  };

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  const handleGithubSignin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <MenuBar />
      <div className="w-25 mx-auto mt-5">
        <h3 className="text-success">Please Login..</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          {success && (
            <p className="text-success">Successfully login to your account</p>
          )}

          <>
            <Button variant="primary" type="submit">
              Log in
            </Button>
            <Form.Text className="text-danger">{error}</Form.Text>
          </>
        </Form>
        <p>
          <small>
            Forget password? Please
            <Button onClick={handleForgetPassword} variant="link">
              Reset
            </Button>
          </small>
        </p>
        <p>
          <small>
            New to this website? Please
            <Link to="/register"> Register</Link>
          </small>
        </p>
        <div className="mb-5 d-grid gap-2 ">
          <Button
            onClick={handleGoogleSignIn}
            className="text-primary"
            variant="light"
            size="lg"
          >
            <FaGoogle /> Sign up with Google
          </Button>
          <Button
            onClick={handleGithubSignin}
            className="text-primary"
            variant="light"
            size="lg"
          >
            <FaGithub /> Sign up with GitHub
          </Button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
