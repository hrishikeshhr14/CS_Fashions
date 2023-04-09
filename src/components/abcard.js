import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GridExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="off.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="tail.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="buil.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          
        </Card.Body>
       
      </Card>
      
    </CardGroup>
  );
}

export default GridExample;