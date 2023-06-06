import React from 'react';
import './About.css';
import profileImage from '../../assets/photo_2023.jpg';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const About = () => {
    return (
        <div className="about-container py-5 my-5">
            <div className="about-content">
                <div className="about-text">
                    <h2 className='news_heading'>About Us</h2>
                    <p className='text-justify'>Welcome to our online news portal, where you'll find the latest updates, breaking news, and in-depth coverage of a wide range of topics. We strive to keep you informed and engaged with the most important stories happening around the world.</p>
                    <p>Developed by <span style={{color: 'var(--yellow)', fontWeight: 'semi-bold'}}>&copy;Nayebul Jannath Chowdhury</span></p>
                    <h3 className='news_heading mt-4'>Technology use</h3>
                    <ListGroup>
                        <ListGroupItem >React</ListGroupItem>
                        <ListGroupItem className='mt-3'>Bootstrap</ListGroupItem>
                        <ListGroupItem className='mt-3'>React Bootstrap</ListGroupItem>
                        <ListGroupItem className='mt-3'>Node</ListGroupItem>
                        <ListGroupItem className='mt-3'>Firebase</ListGroupItem>
                        <ListGroupItem className='mt-3'>React-Icons</ListGroupItem>
                    </ListGroup>
                </div>
                <div className="about-image">
                    <img src={profileImage} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default About;
