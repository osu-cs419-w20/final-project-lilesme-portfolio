/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';
import Courses from '../components/Courses';

const divstyles = css `
  width: 80%;
  border-radius: 25px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  background-color: rgb(163,178,157);
`;

const styles = css`
  text-align: left;
  li {
    font-size: 20px;
    line-height: 30px;
  }
`;
const linkbutton = css`
  text-align: center;
  a {
    background-color: rgb(163,178,157);
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
    text-decoration: none;
    margin: 5px;
    border-radius: 10px;
    :hover {
      background-color: grey;
    }
  }
`;
function Resume() {
  return (
    <Layout>
      <h1>Resume</h1>
      <div css={linkbutton}>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#coursework">Relevant Coursework</a>
        <a href="#skills">Skills</a>
        <a href="#activities">Activities/Awards</a>
        <a href="/meganlilesresume.pdf" download>Download Resume</a>
      </div>
      <h1 id="middle">Experience</h1>
      <div css={divstyles}>
        <div css={styles}>
          <h2>Web Developer & Systems Admin Intern</h2>
          <h3>Portland General Electric</h3>
          <i>Apr 2019 - Sep 2019 | Porland, OR</i>
            <ul>
              <li>Planned and documented the implementation and replacement of Windows server 2008 R2 DC’s to Windows server 2016 DC’s</li>
              <li>Created PowerShell scripts to execute multiple Active Directory commands to save time </li>
              <li>Learned to manage Active Directory Users & Computer, and Group Policy Objects </li>
              <li>Worked on a team to design and implement the replacement of the Corporate Intranet Site in Microsoft SharePoint Online to create a better user experience for employees</li>
              <li>Created three digital forms using MS PowerApps for the purpose of quickly submitting feedback, an event and a tool</li>
            </ul>
        </div>
      </div>
      <br/>
      <div css={divstyles}>
        <div css={styles}>
          <h2>Student Course Developer</h2>
          <h3>Oregon State Ecampus</h3>
          <i>Nov 2018 - Present | Corvallis, OR</i>
          <ul>
            <li>Edited and revised lecture videos for OSU Ecampus</li>
            <li>Used YouTube editor to create video transcripts</li>
            <li>Designed Ecampus courses on Canvas</li>
          </ul>
        </div>
      </div>
      <br/>
      <div css={divstyles}>
        <div css={styles}>
          <h2>Web Developer</h2>
          <h3>Vino Voyage</h3>
          <i>Nov 2018 - Jan 2020 | Porland, OR</i>
          <ul>
            <li>Assisted in developing a new web application designed for wine connoisseurs to create a personalized tasting experience</li>
            <li>Developed user interface for admins to quickly and easily add, update and delete data</li>
            <li>Developed both front-end and back-end of application using Python and SQLAlchemy</li>
            <li>Analyzed code for errors</li>
          </ul>
        </div>
      </div>
      <br/>
      <div css={divstyles}>
        <div css={styles}>
          <h2>Sales Associate</h2>
          <h3>Nike Company Store</h3>
          <i>Jul 2017 - Jan 2019 | Beaverton, OR</i>
          <ul>
            <li>Customer assistance on purchases, restocking inventory, sales documentation, cashier</li>
            <li>Worked in a team environment with focus on accelerating revenue growth</li>
          </ul>
        </div>
      </div>
      <br/>
      <div>
      <h1 id="education">Education</h1>
      <div css={divstyles}>
        <div css={styles}>
          <h2>B.S. Computer Science</h2>
          <h3>Oregon State University</h3>
          <h4> Concentration: UX/UI</h4>
          <i>GPA: 3.48 |Exp: June 2020</i>
        </div>
      </div>
      <h1 id="courses">Relevant Coursework</h1>
        <Courses />
      </div>
      <h1 id="skills">Skills</h1>
      <h1 id="activities">Activities & Awards</h1>
    </Layout>
  );
}

export default Resume;
