import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banner/Banner.PNG'
import banner2 from '../../assets/banner/Banner2.PNG'
import './Slider.css';

const Slider = () => {
    return (
        <div className='mt-5'>
            <Carousel className='slider'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img"
                        src={banner1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;