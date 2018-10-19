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
                <h3>Austin Coding Academy</h3>
                    <h4>Teachers Assistant</h4>
                    <li>Aided instructor through all aspects of Web 101 course</li>
                    <li>Helped & mentored students both in person and remote via web conferencing</li>
                    <li>Graded, commented, and merged homeworks/pull requests</li>
                    <li>Troubleshot students problems with either code, environment set up, terminal/bash, and GitHub</li>
                <h3>Airrosti</h3>
                    <h4>Certified Recovery Specialist</h4>
                    <li>Work one on one with patients in 30 minute blocks</li>
                    <li>Educate patients on their current condition through demonstration and visuals</li>
                    <li>Create a personlized exercise regimin for them to complete at home during treatment plan</li>
                    <li>Detail my documentation to represent patients homework and progress</li>
                    <li>Build external relationships and engagement via web, events, and marketing efforts</li>
            </Col>
            <Col md={5}>
                <h1>EDUCATION</h1>
                    <h3>University of Southern Mississippi</h3>
                        <h5>Bachelors of Kinesiology, Minor in Psychology</h5>
                        <li>GPA 3.6</li>
                        <li>Graduated with Honors</li>
                        <li>Lambda Sigma Honor Society - Care Package Chair</li>
                        <li>Phi Mu Sorority - Academic Excellence Chair</li>
                    <h3>Austin Coding Academy</h3>
                        <h5>Full Stack Web Development - JavaScript</h5>
                        <li>JavaScript - MERN Stack</li>
                        <li>Completed all three courses offered (9 months)</li>
                        <li>Built several full stack websites over three courses</li>
                        <li>*see more in technologies section*</li>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                
            </Col>
            <Col md={4}>
                <h1>TECHNOLOGIES</h1>
                <Row>
                    <Col md={5}>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </Col>
                    <Col md={6}>
                        <li>Node</li>
                        <li>Bootstrap</li>
                        <li>Mocha</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                    </Col>
                </Row>

            </Col>            
            <Col md={8}>
                <h1>REFERENCES</h1>
                    <Row>
                        <Col sm={6}>
                            <h3>CEO - Austin Coding Academy</h3>
                            <h4>Chris Lofton</h4>
                            <h5>clofton@austincodingacademy.com</h5>
                    </Col>
                    <Col sm={6}>
                            <h3>Airrosti Certified Provider</h3>
                            <h4>Dr. Marcus Johnson</h4>
                            <h5>drmjohnson@airrosti.com</h5>
                    </Col>
                    </Row>
            </Col>            
          </Row>
        </Grid>
        </div>
    );

  export default AboutMe;