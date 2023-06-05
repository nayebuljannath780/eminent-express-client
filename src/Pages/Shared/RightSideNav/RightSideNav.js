import React, { useEffect, useState } from "react";
import { FcPrivacy } from "react-icons/fc";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import c_pic1 from '../../../assets/categories/news.jpg';
import './RightSideNav.css';
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaRegClock
} from "react-icons/fa";


const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3 className="news_heading mt-3">Categories</h3>
      <ListGroup className="list_group">
        {categories.map((category) => (
          <ListGroup.Item className="categories_list border-0 mb-2" key={category.id}>
            <Link to={`/category/${category.id}`}>
              <div className="d-flex">
                <div>
                  <img src={c_pic1} alt='' className="cate_list_img" />
                </div>
                <div className="flex-column">
                  <span className="black_color">{category.name}</span> <br />
                  <span className="span_date"><FaRegClock/> {category.date}</span>
                </div>
              </div>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h5>Find us on</h5>
      <ListGroup className="me-5">
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
    </div>
  );
};

export default RightSideNav;
