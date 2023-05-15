import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
  return (
    <div className="page-container">
      <div className="content-wrap">
  
      </div>
      <Footer>
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
                <Icon className="fab fa-facebook-f" /> Facebook
              </Footer.Link>
              <Footer.Link>
                <Icon className="fab fa-instagram" /> Instagram
              </Footer.Link>
             
              
            </Footer.Column>
          </Footer.Row>
        </Footer.Wrapper>
      </Footer>
    </div>
  );
}
