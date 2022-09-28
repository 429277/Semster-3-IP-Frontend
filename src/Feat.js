import Post from './Post';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Variables} from './Variables.js';
import React, {Component} from 'react';

class Feat extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }
  
  componentDidMount(){
    fetch("https://localhost:44314/api/Post")
    .then(res=>res.json())
    .then(json=> {
      this.setState({
        items: json
    })
    });
  }


render(){
    var items = this.state.items;

    return ( <div className="Feat">
        <h2>Welcome back!</h2>
        <ul>
        {items.map(ite=>(
            <li key={ite.UserName}>
      <Row>
        <Col></Col>
        <Col xs={5}><Post user = {ite.UserName} message = {ite.Caption}/></Col>
        <Col></Col>
      </Row>
        </li>
          ))}
        </ul>
    </div> );
}
};
 
export default Feat;