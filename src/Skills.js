import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div class="right2">
      <div class="row">
        <p class="col">{this.props.skills.keySkills[0]}</p>
        <p class="col">{this.props.skills.keySkills[1]}</p>
        <p class="col">{this.props.skills.keySkills[2]}</p>
      </div>

      <div class="row">
        <p class="col">{this.props.skills.keySkills[3]}</p>
        <p class="col">{this.props.skills.keySkills[4]}</p>
        <p class="col">{this.props.skills.keySkills[5]}</p>
      </div>

      <div class="row">
        <p class="col">{this.props.skills.keySkills[6]}</p>
        <p class="col">{this.props.skills.keySkills[7]}</p>
        <p class="col">{this.props.skills.keySkills[8]}</p>
      </div>
    </div>
    );
  }
}

export default Skills;