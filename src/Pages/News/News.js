import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaEye } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { image_url, title, author, category_id, details, total_view } = news;

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <div className="d-flex justify-content-around p-2">
          <p>{author?.name}</p>
          <p>{author?.published_date}</p>
          <div>
            <FaEye className="me-2" />
            <span>{total_view}</span>
          </div>
        </div> */}
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
