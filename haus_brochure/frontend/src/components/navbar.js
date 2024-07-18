import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css'; // App.css dosyasını import edin

const MyNavbar = () => {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Navbar.Brand href="#home">HAUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"> {/* Burada className="ml-auto" kullanarak menüyü sağa hizalıyoruz */}
          <Nav.Link href="#home">Ürünler</Nav.Link>
          <Nav.Link href="#link">Uygulamalar</Nav.Link>
          <NavDropdown title="Satış Sonrası" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
