import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post({user, message}) {

  return (
    <Card style={{ width: '38rem' }}>
      <Card.Img variant="top" src={require('./Fontys-eindhoven.jpg')} />
      <Card.Body>
      <Button variant="primary">Comments</Button>
        <Card.Text>
        {user}: {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;