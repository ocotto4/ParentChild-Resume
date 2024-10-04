import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div class="right">
      <div>
        <div class="job-entry"></div>
        <h4 class="jobHeading">{this.props.workExperience.jobHeading1}</h4>
        <p class="description2">{this.props.workExperience.description1}</p>
      </div>

      <div class="job-entry">
        <h4 class="jobHeading">{this.props.workExperience.jobHeading2}</h4>
        <p class="description">{this.props.workExperience.description2}</p>
      </div>
    </div>

    );
  }
}

export default WorkExperience;