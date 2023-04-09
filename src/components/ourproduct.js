import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
// import ListGroup from 'react-bootstrap/ListGroup';

function GroupExample() {
  return (
    <CardGroup>
       <Card className="bg-dark text-white">
      <Card.Img src="d6.png" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Header>VARITIES</Card.Header>
        <Card.Text>
        Knits – T Shirts<hr></hr>
        Basic Tops<hr></hr>
        Polo Shirts<hr></hr>
        Night Shirt<hr></hr>
        Pyjamas<hr></hr>
        Vests<hr></hr>
        Leggings<hr></hr>
        Kids wear<hr></hr>
        
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
        <Card className="bg-dark text-white">
        <Card.Img src="d6.png" alt="d5.png" />
        <Card.ImgOverlay>
      <Card.Header>FABRICS</Card.Header>
      <Card.Text>
      All fabric in 100% cotton<hr></hr>
    Cotton Spandex<hr></hr>
    Cotton Viscose<hr></hr>
    Poly Viscose<hr></hr>
    Modal<hr></hr>
    Cotton polyester blends<hr></hr>
    Yarn dyed strips/ AOP Prints/ Burnout<hr></hr>      
      </Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card className="bg-dark text-white">
      <Card.Img src="d6.png" alt="Card image" />
      <Card.ImgOverlay>
      <Card.Header>WAASHS HANDLED</Card.Header>
        <Card.Text>
        Softner wash<hr></hr>
Enzyme wash<hr></hr>
Bio wash<hr></hr>
Bio polish<hr></hr>
Stone wash<hr></hr>
CPT treatment wash<hr></hr>
Spray wash<hr></hr>
Tie& Wash<hr></hr>
Garment dyeing<hr></hr>
        
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

      
      
    </CardGroup>
  );
}

export default GroupExample;