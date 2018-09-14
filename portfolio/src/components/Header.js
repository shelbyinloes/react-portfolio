import React, {Component} from "react";

const headWrap = {
  marginTop: 0,
  height: "80px",
  width: "100%",
  position: "fixed",
  display: "flex",
  justifyContent: "flex-end"
}

const linkWrap = {
  width: "40%",
  height: "100px",
  display: "flex", 
  justifyContent: "space-between",
  marginRight: "50px",
  fontSize: "13px",
  alignItems: "center"
}

class Header extends Component {
  render(){
    return(
      <div style={headWrap}>
        <div style={linkWrap}>
          <h1>ABOUT ME</h1>
          <h1>PORTFOLIO</h1>
          <h1>CONTACT</h1>
        </div>
      </div>
    )}
} 

  export default Header;