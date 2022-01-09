import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Firebase Login Demo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          
        </Nav>
        {currentUser && (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as :
                <a href="#login">
                  {currentUser.displayName
                    ? currentUser.displayName
                    : currentUser.email}
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          )}
      </Container>
    </Navbar>
  );
};

export default Header;
