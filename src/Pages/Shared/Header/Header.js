import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Image from "react-bootstrap/Image";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mb-5 mx-0">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        style={{ height: 60, marginBottom: 20, background: 'var(--yellow)'}}
      >
        <>
          <Navbar.Brand>
            <Link style={{color: 'var(--white)', marginLeft:'5rem'}} to="/">EminentExpress</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
              <NavDropdown title="Account" id="account-dropdown">
                {user?.displayName ? (
                  <>
                    <NavDropdown.Item onClick={handleLogOut}>
                      Log Out
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item>
                      <Link to="/login">Login</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                      <Link to="/register">Register</Link>
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    style={{ height: "40px" }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserAlt />
                )}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </div>
  );
};

export default Header;






































// import React, { useContext } from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import LeftSideNav from "../LeftSideNav/LeftSideNav";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../context/AuthProvider";
// import Image from "react-bootstrap/Image";
// import { FaUserAlt } from "react-icons/fa";
// import { Button } from "react-bootstrap";

// const Header = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .then((error) => {
//         console.error(error);
//       });
//   };
//   return (
//     <div className="mb-5 mx-o" >
//       <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{height: 60, marginBottom: 20}} >
//         <>
//           <Navbar.Brand>
//             <Link to="/">EminentExpress</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//             </Nav>
//             <Nav>
//               <Nav.Link>
//                 {user?.displayName ? (
//                   <>
//                     <span className="mx-2">{user?.displayName}</span>
//                     <Button variant="light" onClick={handleLogOut}>
//                       Log Out
//                     </Button>
//                   </>
//                 ) : (
//                   <>
//                     <Link to="/login">Login</Link>
//                     <Link to="/register">Register</Link>
//                   </>
//                 )}
//               </Nav.Link>
//             </Nav>
//             <Nav>
//               <Link to="/profile">
//                 {user?.photoURL ? (
//                   <Image
//                     roundedCircle
//                     style={{ height: "40px" }}
//                     src={user.photoURL}
//                     alt=""
//                   />
//                 ) : (
//                   <FaUserAlt />
//                 )}
//               </Link>
//             </Nav>
//             <div className="d-lg-none">
//               <LeftSideNav></LeftSideNav>
//             </div>
//           </Navbar.Collapse>
//         </>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
