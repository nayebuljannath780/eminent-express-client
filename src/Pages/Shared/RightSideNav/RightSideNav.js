import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FcGoogle, FcPrivacy } from "react-icons/fc";
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { loginProvider } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    loginProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => console.error(error));
  };

  return (
    <div>
      <Button
        onClick={handleGoogleLogin}
        className="w-100 my-2"
        variant="outline-success"
      >
        <FcGoogle /> Login with Google
      </Button>{" "}
      <Button className="w-100" variant="outline-info">
        <FaGithub /> Login with GitHub
      </Button>{" "}
      <h5 className="mt-3">Find us On</h5>
      <ListGroup>
        <ListGroup.Item>
          <FaFacebook /> FaceBook
        </ListGroup.Item>
        <ListGroup.Item className="my-1">
          <FaYoutube /> YouTube
        </ListGroup.Item>
        <ListGroup.Item className="my-1">
          <FaTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item className="my-1">
          <FaWhatsapp /> WhatsApp
        </ListGroup.Item>
        <ListGroup.Item className="my-1">
          <FcPrivacy /> Privacy Policy
        </ListGroup.Item>
      </ListGroup>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
