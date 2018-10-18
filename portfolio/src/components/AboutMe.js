import React, {Component} from "react";
import "../App.css";
import {Grid, Row, Col} from "react-bootstrap";

// const infoOpen = {
//   transition: "transform 6000ms ease-in-out",
//   color: "purple"
// }


class AboutMe extends Component {
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
            <div class="sectionStyle" >
                <h1 class="sectionHeader" onClick={this.handleClick}>About Me</h1>
                <AboutMeInfo  visible={this.state.visible}/>
            </div>
        )}
    } 

    const AboutMeInfo = ({visible}) => (
        // <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        // <h2>Education</h2>
        //     <h3>Austin Coding Academy</h3>
        //         <li>Web Development, MERN stack</li>
        //     <h3>University of Southern Mississippi</h3>
        //         <li>Bachelors of Science</li>
        // <h2>Employment</h2>
        //     <h3>Austin Coding Academy</h3>
        //         <li>Teachers Assistant, Intro to Web</li>
        //     <h3>Airrosti</h3>
        //         <li>Certified Recovery Specialist</li>
        // <h2>Development Languages and Skills</h2>
        //     <h3>MERN stack</h3>
        //     <h3>JavaScript</h3>
        //     <h3>Version control with Git</h3>
        // </div>
        <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        <Grid>
          <Row>
            <Col md={7}>
                <h1>EXPERIENCE</h1>
                <h3>Austin Coding Academy - <strong>Teachers Assistant</strong></h3>
                <h3>Airrosti - <strong>Certified Recovery Specialist</strong></h3>
            </Col>
            <Col md={5}>
                <h1>EDUCATION</h1>
            </Col>
            <Col md={6}>
                <h1>TECHNOLOGIES</h1>
            </Col>            
            <Col md={6}>
                <h1>REFERENCES</h1>
            </Col>            
            <Col md={6}>
                <h1>CONTACT</h1>
            </Col>
          </Row>
        </Grid>
        </div>
    );

  export default AboutMe;