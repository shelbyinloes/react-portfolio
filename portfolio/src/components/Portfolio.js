import React, {Component} from "react";
import "../App.css";
import {Grid, Row, Col} from "react-bootstrap";

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
            <div className="sectionStyle" >
                <h1 className="sectionHeader" onClick={this.handleClick}>Portfolio</h1>
                <PortfolioInfo  visible={this.state.visible}/>
            </div>
        )}
    } 

    const PortfolioInfo = ({visible}) => (
        <div id="infoOpen" className={visible ? 'slideIn' : 'slideOut'}>
        <Grid>
          <Row>
            <Col sm={12} >
              <h2>Checkout my <a href='https://github.com/shelbyinloes'>GitHub</a> for now!</h2>     
            </Col>      
          </Row>
        </Grid>
        </div>
    )

  export default Portfolio;