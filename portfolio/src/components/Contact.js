import React, {Component} from "react";
import "../App.css";

// const infoOpen = {
//   transition: "transform 6000ms ease-in-out",
//   color: "purple"
// }


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
            <div class="sectionStyle" >
                <h1 class="sectionHeader" onClick={this.handleClick}>Contact</h1>
                <ContactInfo  visible={this.state.visible}/>
            </div>
        )}
    } 

    const ContactInfo = ({visible}) => (
      <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        <h2>Shelby Inloes</h2>
            <h3>9376894078</h3>
      </div>
    )

  export default Contact;