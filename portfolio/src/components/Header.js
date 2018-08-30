import React, {Component} from "react";

const headStyle = {
  backgroundColor: "#DE9284",
  marginTop: 0,
  height: "80px",
  width: "100%",
  position: "fixed",
  borderBottom: "dotted white 5px"
}

class Header extends Component {
  render(){
    return(
      <div>
        <p style={headStyle}>hellooo</p>
      </div>
    )}
} 

  export default Header;