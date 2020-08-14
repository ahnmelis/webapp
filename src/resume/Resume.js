import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Rung from "./Rung";
import "./resume.css";
 
class Resume extends Component {
  render() {
    return (
      <div>
        <div className="heading">Work Experience</div>
        <p><i>Click each position for more details!</i></p>
        <Accordion >
        <Rung eventKey="0" 
                position="Undergraduate Teaching Assistant"
                date="January 2019 - Present"
                company="University of Southern California, Viterbi School of Engineering"
                location="Los Angeles, CA"
                icon={['fas', 'hand-peace']}
                color="#9D2235" >
            <ul>
              <li>Course producer for CS102: Fundamentals of Computations in 2019, Fall 2020 and EE109: Intro to Embedded Systems in Spring 2020 </li>
              <li>Co-run weekly labs that reinforce programming curriculum. </li>
              <li>Hold office hours to answer additional questions from students. </li>
              <li>Grade weekly assignments and midterms/final test. </li>
            </ul>
          </Rung>
          <Rung eventKey="1" 
                position="Software Engineer Intern"
                date="May 2020 - August 2020"
                company="Microsoft"
                location="Home"
                icon={['fab', 'microsoft']}
                color="#00A4EF">
            <ul>
              <li>Link to<a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/experimental/msal-react-native-android-poc">project</a>and<a href="https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/experimental/msal-react-native-android-poc/blogPost.md">blog post</a></li>
              <li>Worked in Azure Identity on the Auth Client DevEx JavaScript SDK team.</li>
              <li>Created a Microsoft Authentication Library (MSAL) for React Native (Android) that serves as a proof of concept. The library
              lets React Native developers use MSAL, which allows them to authenticate Azure Active Directory accounts and acquire
              tokens from the Microsoft Identity platform endpoint in order to access secured web APIs. The project was completed in 7
              weeks, 3 weeks ahead of schedule.</li>
              <li>Addressed a customer-raised issue with MSAL JS Core that fixed cache misses when certain authorities were provided.</li>
            </ul>
          </Rung>
          <Rung eventKey="2" 
                position="IT Intern"
                date="June 2019 - August 2019"
                company="Chevron"
                location="San Ramon, CA"
                icon={['fas', 'gas-pump']}
                color="#0054A4">
            <ul>
              <li>Worked as a software developer for the Data Analytics Team and as a business analyst for the Insite360 Exploration project.</li>
              <li>Designed, developed, and documented three Logic Apps that ingest SharePoint files into Azure Blob Storage and trigger/monitor incremental refreshes of Azure Analysis Services models, saving employees 2-3 hours per day.</li>
              <li>Communicated with Company Owned, Company Operated (COCO) station managers by documenting their end-of-day process. Proposed a new solution using Insite360 that will save the company $3000 per station annually. </li>
            </ul>
          </Rung>
        </Accordion>
        <br />
      </div>
    );
  }
}
 
export default Resume;