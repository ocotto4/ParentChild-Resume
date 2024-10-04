import React, { Component } from "react";

class Education extends Component {
  render() {
    return (

      <div class="right">
        <div>
          <div class="job-entry"></div>
          <h4 class="jobHeading">{this.props.education.school}</h4>
          <p class="description">{this.props.education.major}</p>
          <p>{this.props.education.years}</p>
          <p>{this.props.education.gpa}</p>
        </div>
      </div>
    );
  }
}

export default Education;