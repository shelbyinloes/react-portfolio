import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

const headerLinks = {
  fontSize: "40px"
}


class Header extends Component {
  render(){
    return(
      <div>
      <Grid>
        <Row style={headerLinks}>
          <Col md={3} sm={0}/>
          <Col md={3} sm={4}>PORTFOLIO</Col>
          <Col md={3} sm={4}>ABOUT ME</Col>
          <Col md={3} sm={4}>CONTACT</Col>
        </Row>
      </Grid>
      </div>
    )}
} 

  export default Header;