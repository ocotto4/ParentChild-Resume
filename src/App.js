import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myInfo: {
        name: "Oscar Cotto",
        occupation: "Software Engineer"
      },
      contactInfo: {
        email: "oc4@njit.edu",
        web: "github.com/ocotto4",
        mobile: "2012891896"
      },
      personalInfo: {
        profileParagraph: "Hello, My name is Oscar and I am a fourth-year college student majoring in Computer Science at New Jersey Institute of Technology. My career goal is to become a Software Engineer. Ever since I was young I always enjoyed computers and to problem solve so deciding to study CS felt natural.Over the course of these past years I have immersed myself into the field and consistently improving as a developer and student."
      },
      workExperience: {
        jobHeading1: "Software Engineer Intern at Publicis Sapient (June 2024 - August 2024)",
        description1: "Developed and maintained the database and backend of a full-stack web app. Integrated APIs with Next.js and React front-end components. Collaborated with front-end developers and shadowed senior engineers in team meetings. Gained hands-on experience with version control systems, code reviews, and agile development processes. Developed an AI component for a full-stack mobile application to recommend users similar sightings.",
        jobHeading2: "Pharmacy Customer Service Associate at Walgreens (June 2020 - September 2024)",
        description2: "Played a key role in achieving a 100% scan-out rate, leading the district. Thrived in a team-oriented environment, collaborating with colleagues. Provided exceptional customer service by attending to and assisting all customers. Proficiently filled prescriptions, operated the register, performed scan-outs, and managed stock."
      },
      skills: {
        keySkills: ["Python", "Java", "Javascript", "C/C++", "HTML/CSS", "React/React Native", "Node.js", "Express", "MySQL"]
      },
      education: {
        school: "New Jersey Institute Of Technology",
        major: "BS in Computer Science",
        years: "2021-2025",
        gpa: "GPA:3.6"
      }
    }
  }
  render() {
    return (
      <div>
        <Header myInfo={this.state.myInfo} contactInfo={this.state.contactInfo}></Header>
        <div class="divider"></div>

        <div class="section2">
          <h3 class="sectionHeading">Personal Profile</h3>
          <PersonalProfile personalInfo={this.state.personalInfo}></PersonalProfile>
        </div>

        <div class="blackDivider"></div>

        <div class="section3">
          <div class="left">
            <h3 class="sectionHeading">Work Experience</h3>
          </div>
          <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        </div>
        <div class="blackDivider"></div>

        <div class="section4">
          <div class="left">
            <h3 class="sectionHeading">Key Skills</h3>
          </div>
          <Skills skills={this.state.skills}></Skills>
        </div>
        <div class="blackDivider"></div>

        <div class="section5">
          <div class="left">
            <h3 class="sectionHeading">Education</h3>
          </div>
          <Education education={this.state.education}></Education>
        </div>
      </div>
    );
  }
}
export default App;