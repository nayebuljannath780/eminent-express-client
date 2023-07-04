import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import './RightSideNav.css';
import { FaRegClock } from "react-icons/fa";


const RightSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://eminent-express-server.vercel.app/category")
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
                  <img src={category.c_logo} alt='' className="cate_list_img" />
                </div>
                <div className="flex-column">
                  <span className="black_color">{category.name}</span> <br />
                  <span className="span_date"><FaRegClock /> {category.date}</span>
                </div>
              </div>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default RightSideNav;
