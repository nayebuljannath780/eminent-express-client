import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import Slider from "../../components/Slider/Slider";
import { Row, Col } from 'react-bootstrap';
import About from "../About/About";
import useTitle from "../../Hooks/useTitle";


const Home = () => {
  const allNews = useLoaderData();
  useTitle('Home');

  return (
    <div className="main_container">
      <Slider />
      <span className="news_heading mt-5">All News</span>
      <Row>
        {allNews.map((news) => (
          <Col key={news._id} xs={12} md={6}>
            <NewsSummaryCard news={news} />
          </Col>
        ))}
      </Row>
      <About/>
    </div>
  );
};

export default Home;
