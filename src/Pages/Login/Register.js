import React from "react";
import MenuBar from "../Shared/MenuBar/MenuBar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Footer from "../Shared/Footer/Footer";

const auth = getAuth(app);

const Register = () => {
  const [user, setUser] = useState({});
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 character");
      return;
    }
    setPasswordError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        form.reset();
        verifyEmail();
        updateUserName(name);
      })
      .catch((error) => {
        console.error("error", error);
        setPasswordError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please checked your email & verify");
    });
  };

  const updateUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("displayname updated");
      })
      .catch((error) => {
        console.error("error", error);
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
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <MenuBar />
      <div className="w-25 mx-auto mt-5">
        <h3 className="text-primary">Please Register..</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
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

          <p className="text-danger"> {passwordError} </p>
          {success && (
            <p className="text-success">User Created Successfully...</p>
          )}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <p>
          <small>
            Allready have an account? Please
            <Link to="/login"> Log in</Link> OR
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
      <Footer />
    </div>
  );
};

export default Register;
