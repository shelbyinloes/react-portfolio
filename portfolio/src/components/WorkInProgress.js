import React, {Component} from "react";
import "../App.css";
import {Grid, Row, Col} from "react-bootstrap";

class WorkInProgress extends Component {

    render(){
        return(
            <div>
            <Grid>
              <Row>
                <Col sm={2}></Col>
                <Col sm={8} >
                  <h3>I am working diligently on my portfolio! Changes occuring several times a week. Check back often for progress. Click to open each section!</h3>  
                </Col>   
                <Col sm={2}></Col>   
              </Row>
            </Grid>
            </div>
        )}
    } 

  export default WorkInProgress