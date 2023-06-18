// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function CollapsibleExample() {
  
//     const CollapsibleExample style = {
//       backgroundColor: 'blue',
//       color: 'white'
//     };
//   return (
//     <Navbar collapseOnSelect expand="lg"  variant="light" bg='light' fixed='top'>
//       <Container>
//         <Navbar.Brand  href="/" >C.S.FASHIONS</Navbar.Brand>
//         <Navbar.Toggle aria="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/services">Services</Nav.Link>
//             <Nav.Link href="/product">Product</Nav.Link>
//             <Nav.Link href="/about">About Us</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             </Nav> 

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//   );
// }

// export default CollapsibleExample;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  const navbarStyle = {
    backgroundColor: '#dee2e6',
    color: 'white'
  };

  return (
    <Navbar collapseOnSelect expand="lg"  fixed="top" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">C.S.FASHIONS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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


