import React, { useContext, useRef, useState } from "react";
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
    <Form onSubmit={handleSubmit} className="mt-5">
      <h1 className="text-center">Accounts Details</h1> <hr />
      <Form.Group className="mb-3">
        <Form.Label className="news_heading">Name</Form.Label>
        <Form.Control
          onChange={handleUserName}
          type="text"
          defaultValue={name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="news_heading">Email</Form.Label>
        <Form.Control type="email" defaultValue={user.email} readOnly />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="news_heading">Photo URL</Form.Label>
        <Form.Control
          ref={photoUrlRef}
          type="text"
          defaultValue={user.photoURL}
        />
      </Form.Group>
    </Form>
  );
};

export default Profile;
