import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banner/Banner.PNG';
import banner2 from '../../assets/banner/Banner2.PNG';
import banner3 from '../../assets/banner/banner-3.jpg';
import './Slider.css';

const Slider = () => {

    const customNextIcon = (
        <div
            className="carousel-control-prev"
            style={{
                position: 'absolute',
                top: '40%',
                left: '90px',
                background: 'rgba(0, 0, 0, 0.9)',
                borderLeft: '4px solid var(--yellow)',
                padding: '5px',
                width: '40px',
                height: '40px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                style={{ color: 'white', fontSize: '20px' }}
            />
        </div>
    );

    const customPrevIcon = (
        <div
            className="carousel-control-prev"
            style={{
                position: 'absolute',
                top: '40%',
                right: '90px',
                background: 'rgba(0, 0, 0, 0.9)',
                borderRight: '4px solid var(--yellow)',
                padding: '5px',
                width: '40px',
                height: '40px',
                display: 'none',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                style={{ color: 'white', fontSize: '20px' }}
            />
        </div>
    );

    return (
        <div className='mt-5 position-relative'>
            <Carousel className='slider' nextIcon={customNextIcon} prevIcon={customPrevIcon}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider_img img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
