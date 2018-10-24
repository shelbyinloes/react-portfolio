import React, {Component} from "react";
import "../App.css";


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
        <h1>Shelby Inloes</h1>
        <h3>contact@shelbyinloes.com</h3>
        <h3><a href="https://www.linkedin.com/in/shelbyinloes/">LinkedIn</a></h3>
        {/* need to fix this */}
        <h5>Talk to you soon!</h5>
      </div>
    )

  export default Contact;