import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="d1.png"/>
        <Card.Body>
          <Card.Text>
             C.S Fashions
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default ImageAndTextExample;