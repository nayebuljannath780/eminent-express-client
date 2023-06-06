import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
  <div className="under_root px-5">
    <div className="main">
      <Header />
      <div className="header-space" />
      <>
        <Row>
          <Col lg={9} className="px-5">
            <Outlet></Outlet>
          </Col>
          <Col lg={3} className="position-fixed d-none d-lg-block me-5" style={{ top: '5rem', right: '0' }}>
            <RightSideNav />
          </Col>
        </Row>
      </>
    </div>
  </div>

  );
};

export default Main;
