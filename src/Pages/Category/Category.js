import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import { Col, Row } from "react-bootstrap";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div className="mt-5">
      <h2>This category has: {categoryNews.category_name || "booooo"}</h2>
      <Row>
        {categoryNews.map((news) => (
          <Col key={news.id} xs={12} md={6}>
            <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;
