import React, {Component} from "react";
import "../App.css";
import {Grid, Row, Col} from "react-bootstrap";

const headShotPicture = {
    width: "100%",
    padding: "30px"
}

class Contact extends Component {
    constructor () {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = { visible: false }
    }

    handleClick () {
        this.setState(prev => ({ visible: !prev.visible}))
    }

    render(){
        return(
            <div className="sectionStyle" >
                <h1 className="sectionHeader" onClick={this.handleClick}>Contact</h1>
                <ContactInfo  visible={this.state.visible}/>
            </div>
        )}
    } 

    const ContactInfo = ({visible}) => (
        <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        <Grid>
          <Row>
            <Col sm={5}>
                <img src={require("../images/indeed-austin-day1-3071.jpg")} style={headShotPicture}/>
            </Col>     
            <Col sm={1}>
                <img src={require("../images/indeed-austin-day1-3071.jpg")} style={headShotPicture}/>
            </Col>     
            <Col sm={6}>
                <h2>Shelby Inloes</h2>
                <h3>LinkedIn: </h3>
                <h3>GitHub: </h3>
                <h3>E-mail: contact@shelbyinloes.com</h3>
             </Col>    
          </Row>
        </Grid>
        </div>
    )

  export default Contact;