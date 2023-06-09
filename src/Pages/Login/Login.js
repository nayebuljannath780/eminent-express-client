import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { loginUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Login');

  const from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();

        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error("Your email is not verified. Please verify your email");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { loginProvider } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((error) => console.error(error));
  };
  return (
    <>
      <Form className="mt-5" onSubmit={handleUserLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
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
        <Button variant="warning" type="submit" >
          Login
        </Button>
        <p>
          <Form.Text className="text-danger">{error}</Form.Text>
        </p>
      </Form>
      <>
      <Button
        onClick={handleGoogleLogin}
        className="w-100 my-2"
        variant="outline-success"
      >
        <span><FcGoogle /> Login with Google</span>
      </Button>
      </>
    </>
  );
};

export default Login;
