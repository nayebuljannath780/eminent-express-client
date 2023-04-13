import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, author, rating, title, details, image_url, total_view } = news;
  return (
    <Card className="my-3">
      <Card.Header>
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
          <div>
            <FaBookmark className="me-1" />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "...."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-item-center">
        <div>
          <FaStar className="text-warning me-2" />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
