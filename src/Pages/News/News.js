import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaStar } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";

const News = () => {
  const news = useLoaderData();
  const { image_url, title, author, rating, category_id, details } = news;
  useTitle('News');

  return (

    <Card className="my-3 mt-5">
      <Card.Header className=" border-0">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Image
              roundedCircle
              className="me-2"
              src={author.img}
              style={{ height: 60 }}
            />
            <div className="">
              <p className="mb-0">{author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div className="flex">
              <FaStar className="text-warning mx-2" />
              <span>{rating?.number}</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={image_url} />
        <Card.Title className="my-4">{title}</Card.Title>
        <Card.Text className="text-justify">
          {details}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex flex-row-reverse justify-content-between align-item-center border-0 ">
      <Link to={`/category/${category_id}`}>
          <span className="news_heading">Back to All news</span>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default News;
