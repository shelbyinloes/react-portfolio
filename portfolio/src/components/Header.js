import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";

// const headWrap = {
//   marginTop: 0,
//   height: "80px",
//   width: "100%",
//   position: "fixed",
//   display: "flex",
//   justifyContent: "flex-end"
// }

// const linkWrap = {
//   width: "40%",
//   height: "100px",
//   display: "flex", 
//   justifyContent: "space-between",
//   marginRight: "50px",
//   fontSize: "13px",
//   alignItems: "center"
// }

class Header extends Component {
  render(){
    return(
      <div>
      <Grid>
        <Row>
          <Col md={6} sm={0}/>
          <Col md={2} sm={4}>PORTFOLIO</Col>
          <Col md={2} sm={4}>ABOUT ME</Col>
          <Col md={2} sm={4}>CONTACT</Col>
        </Row>
      </Grid>
      </div>
    )}
} 

  export default Header;