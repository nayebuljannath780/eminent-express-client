import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar, FaRegClock } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  console.log(news)
  const { _id, author, category_name, rating, title, details, image_url } = news;
  return (
    <Card className="my-3 border-0 position-relative home_card" style={{ width: '100%', height: '25rem' }}>
      <span className="card_cate_btn">Trending</span>
      <div className="card_category_highlighter">
        <span style={{ background: 'rgba(0, 0, 0, 0.7)' }}>{category_name || 'HOt'}</span>
      </div>
      <Card.Body>
        <img variant="top" className="p-0 card_img" src={image_url} alt="" style={{ width: '100%', height: '15rem', border: 'none', borderRadius: 0 }} />

        <div className="d-flex justify-content-between align-items-center mt-2">
          <small><FaRegClock className="me-2 mb-1" />{author.published_date}</small>
          <small><FaStar className="text-warning me-2 mb-1" />{rating?.number}</small>
        </div>
        <Card.Title className="my-3 card_title">{title}</Card.Title>
        <Card.Text className="card_text">
          {details.length > 100 ? (
            <>
              {details.slice(0, 100) + "...."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsSummaryCard;
