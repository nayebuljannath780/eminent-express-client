import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brands/bottle-g702bab3fb_1280.jpg";
import Brand2 from "../../../assets/brands/hotel-ge4480be0e_1280.jpg";

const BrandCarousel = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Brand1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Brand2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
