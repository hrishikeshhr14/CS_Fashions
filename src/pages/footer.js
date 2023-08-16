import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
  return (
    <Container >
      <Footer>
        <hr></hr>
        <br></br>
        <Footer.Wrapper>
          <Footer.Row>
          <Footer.Column>

          </Footer.Column>
            <Footer.Column>
              <Footer.Title>About Us</Footer.Title>
              <Footer.Link href="About">Story</Footer.Link>
              <Footer.Link href="#">Clients</Footer.Link>
              <Footer.Link href="TestimonialSection">Testimonials</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link>
                <Icon className="fab fa-linkedin" /> linkedin
              </Footer.Link>
              <Footer.Link>
                <Icon className="fab fa-instagram" /> Instagram
              </Footer.Link>
              <Footer.Link>
                <Icon className="fab fa-pinterest" /> Pinterest
              </Footer.Link>
            </Footer.Column>
            <Footer.Column>

           </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
        <hr></hr>
        Copyright © 2023 CS.FASHIONS All rights reserved.  |   designed by
        <Footer.Link href="https://www.linkedin.com/in/hrishikesh1412"> hrishikesh</Footer.Link> 
        <br></br>  
      </Footer>
      </Container>  

  );
}
