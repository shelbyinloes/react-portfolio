import React, {Component} from "react";
import "../App.css";

class Portfolio extends Component {
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
                <PortfolioInfo  visible={this.state.visible}/>
            </div>
        )}
    } 

    const PortfolioInfo = ({visible}) => (
      <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        <h2>GITHUB</h2>
            <h3>9376894078</h3>
      </div>
    )

  export default Portfolio;