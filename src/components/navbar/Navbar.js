

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" bg='dark' fixed='top'>
      <Container>
        <Navbar.Brand  href="/" >C.S.FASHIONS</Navbar.Brand>
        <Navbar.Toggle aria="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav> 
            
          
        </Navbar.Collapse>
      </Container>
 
    </Navbar>
    
  );
}

export default CollapsibleExample;

