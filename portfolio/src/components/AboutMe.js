import React, {Component} from "react";
import "../App.css";

// const headWrap = {
//   marginTop: 0,
//   height: "80px",
//   width: "100%",
//   position: "fixed",
//   display: "flex",
//   justifyContent: "flex-end"
// }


class AboutMe extends Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(){

    return(
        <div class="sectionStyle" >
            <h1 class="sectionHeader" onClick={this.toggleHidden.bind(this)}>About Me</h1>
            {!this.state.isHidden && <AboutMeInfo />}
        </div>
    )}
} 

const AboutMeInfo = () => (
    <div id="infoOpen">
        <h2>Education</h2>
            <h3>Austin Coding Academy</h3>
                <li>Web Development, MERN stack</li>
            <h3>University of Southern Mississippi</h3>
                <li>Bachelors of Science</li>
        <h2>Employment</h2>
            <h3>Austin Coding Academy</h3>
                <li>Teachers Assistant, Intro to Web</li>
            <h3>Airrosti</h3>
                <li>Certified Recovery Specialist</li>
        <h2>Development Languages and Skills</h2>
            <h3>MERN stack</h3>
            <h3>JavaScript</h3>
            <h3>Version control with Git</h3>
    </div>
)

  export default AboutMe;