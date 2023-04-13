import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoUrlRef = useRef(user.photoURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photoUrlRef.current.value);
  };

  const handleUserName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Profile</h1>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          onChange={handleUserName}
          type="text"
          defaultValue={name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" defaultValue={user.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          ref={photoUrlRef}
          type="text"
          defaultValue={user.photoURL}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
