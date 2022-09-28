import Post from './Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Variables} from './Variables.js';

const Home = () => {

    return ( <div className="home">
        <h2>Welcome back!</h2>
        <Row>
        <Col></Col>
        <Col xs={5}><Post/></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}><Post/></Col>
        <Col>3 of 3</Col>
      </Row>
    </div> );
}
 
export default Home;