 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function WithHeaderStyledExample() {
  return (
    <Card>
      <Card.Header as="h5">C.S. Fashions</Card.Header>
      <Card.Body>
        <Card.Title>Our Address</Card.Title>
        <Card.Text>
        8/252D, Periyar Colony, KPR Mill Road, Annuparpalayam Post<br></br>Tirupur, Tamilnadu, India - 641652.<br></br>Mobile: +91 72000 30839 / +91 88705 30839 / +91 96002 32555<br></br>Email: suresh@csfashions.net / chandru@csfashions.net<br></br>Skype: csfashions1
        </Card.Text>
        <Card.Link href="">
        <Button variant="primary">Locate C.S.Fashions</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderStyledExample;