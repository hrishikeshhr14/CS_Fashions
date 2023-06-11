import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
  return (
      
      <Footer>
        <hr></hr>
        <Footer.Wrapper>
          <Footer.Row>
            <Footer.Column>
              <Footer.Title>About Us</Footer.Title>
              <Footer.Link href="">Story</Footer.Link>
              <Footer.Link href="#">Clients</Footer.Link>
              <Footer.Link href="#">Testimonials</Footer.Link>
            </Footer.Column>
            
            <Footer.Column>
              <Footer.Title>Social</Footer.Title>
              <Footer.Link>
                <Icon className="fab fa-linkedin" /> linkedin
              </Footer.Link>
              <Footer.Link>
                <Icon className="fab fa-instagram" /> Instagram
              </Footer.Link>
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>

  );
}
