import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
        <p class="profileParagraph"> {this.props.personalInfo.profileParagraph}</p>
    );
  }
}

export default PersonalProfile;