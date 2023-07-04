import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);
  useTitle('Register');


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleProfileUpdate(name, photoURL);
        handleEmailVerify();
        toast.success("Please verify your email");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // this function have to call from create user function
  const handleProfileUpdate = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => { })
      .catch((e) => console.error(e));
  };

  const handleEmailVerify = () => {
    emailVerification();
  };

  // handel terms and condition checkbox
  const handleTerms = (event) => {
    setTerms(event.target.checked);
  };

  return (
    <Form className="mt-5" onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter PhotoURL"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleTerms}
          label={
            <>
              Accept <Link to="/terms">Terms and Condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="warning" type="submit" disabled={!terms}>
        Register
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
      <br />
      <span>
        Already have an account? go to <Link to="/login">Login</Link>
      </span>
    </Form>
  );
};

export default Register;
