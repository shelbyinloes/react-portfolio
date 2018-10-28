import React, {Component} from "react";
import "../App.css";
import {Grid, Row, Col} from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
                <Carousel>
                <div>
                <img alt="Weather Finder App" src={require("../images/weather-finder.png")}/>
                    <p className="legend"><a href="https://shelbyinloes.github.io/WeatherAPI/">Click here</a> to view my Weather App</p>
                </div>
                <div>
                <img alt="Dashboard App" src={require("../images/dashboard.png")}/>
                    <p className="legend">Dashboard</p>
                </div>
               </Carousel>  
            </Col>      
          </Row>
        </Grid>
        </div>
    )

  export default Portfolio;