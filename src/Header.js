import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div class="section1">
        <div class="topLeft">
          <p id="fullName">{this.props.myInfo.name}</p>
          <p class="occupation">{this.props.myInfo.occupation}</p>
        </div>
        <div class="personalInfo">
          <p>Email: <a href="mailto:oc4@njit.edu">{this.props.contactInfo.email}</a></p>
          <p>Web:{this.props.contactInfo.web}</p>
          <p>Mobile:{this.props.contactInfo.mobile}</p>
        </div>
      </div>
    );
  }
}

export default Header;