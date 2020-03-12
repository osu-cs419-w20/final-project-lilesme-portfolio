/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';
import Courses from '../components/Courses';

const background = css `
  margin-top: 60px;
  background-image: url('landscape.jpg');
  min-width: 100%;
  min-height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

`;

const divstyles = css `
  border-radius: 25px;
  padding: 20px;
  margin: 20px;
  display: inline-flex;
  background-color: rgb(163,171,96);
  h2 {
    font-weight: 900;
    font-size: 30px;
  }
`;

const styles = css`
  text-align: left;
  li {
    font-size: 18px;
    line-height: 30px;
  }
`;
const linkbutton = css`
  text-align: center;
  a {
    background-color: rgb(163,171,96);
    border: none;
    color: black;
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
const skills = css `
  display: inline-block;
  margin-right: 20px;
  font-size: 24px;
  text-align: right;
  p {
    display: inline-block;
    border: solid grey 1px;
    border-radius: 10px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: white;
  }
`;
const experience = css`
  margin-left: 80px;
  margin-right: 80px;
  h1 {
    float: left;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const activities = css `
  display: inline-block;
  float: right;
`;
const pge = css `
  width: 1000px;
  height: 350px;
`;
const osu = css `
  width: 500px;
  height: 350px;
`;
const vino = css`
  width: 1000px;
  height: 350px;
`;
const nike = css `
  width: 500px;
  height: 350px;
`;
const school = css`
  width: 700px;
  height: 100px;
`;

const courses = css`
  width: 850px;
  height: 400px;
`;
const skilldiv = css`
  float: right;
  margin-right: 90px;
`;
const header = css`
  padding-top: 40px;
  h2 {
    display: inline;
  }
  h3 {
    display: inline;
    font-size: 20px;
  }
  i {
    float: right;
    font-size: 20px;
    padding-right: 10px;
    display: inline;
  }
`;
const left = css`
  float: left;
`;
function Resume() {
  return (
    <Layout>
      <div css={background}>
        <h1>Resume</h1>
        <div css={linkbutton}>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#coursework">Coursework</a>
          <a href="#skills">Skills</a>
          <a href="/meganlilesresume.pdf" download>Download Resume</a>
        </div>
        <h1 id="middle">Experience</h1>
        <div css={experience}>
          <div css={divstyles}>
            <div css={[styles, pge]}>
              <h2>Web Developer & Systems Admin Intern</h2>
              <h3>Portland General Electric </h3>
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
          <div css={divstyles}>
            <div css={[styles, osu]}>
              <h2>Student Course Developer</h2>
              <h3>Oregon State Ecampus </h3>
              <i>Nov 2018 - Present | Corvallis, OR</i>
              <ul>
                <li>Edited and revised lecture videos for OSU Ecampus</li>
                <li>Used YouTube editor to create video transcripts</li>
                <li>Designed Ecampus courses on Canvas</li>
              </ul>
            </div>
          </div>
        </div>
        <div css={experience}>
          <div css={divstyles}>
            <div css={[styles, vino]}>
              <h2>Web Developer</h2>
              <h3>Vino Voyage </h3>
              <i>Nov 2018 - Jan 2020 | Porland, OR</i>
              <ul>
                <li>Assisted in developing a new web application designed for wine connoisseurs to create a personalized tasting experience</li>
                <li>Developed user interface for admins to quickly and easily add, update and delete data</li>
                <li>Developed both front-end and back-end of application using Python and SQLAlchemy</li>
                <li>Analyzed code for errors</li>
              </ul>
            </div>
          </div>
          <div css={divstyles}>
            <div css={[styles, nike]}>
              <h2>Sales Associate</h2>
              <h3>Nike Company Store </h3>
              <i>Jul 2017 - Jan 2019 | Beaverton, OR</i>
              <ul>
                <li>Customer assistance on purchases, restocking inventory, sales documentation, cashier</li>
                <li>Worked in a team environment with focus on accelerating revenue growth</li>
              </ul>
            </div>
          </div>
        </div>
        <br/>
        <div css={experience}>
          <div css={divstyles}>
            <h1 id="education">Education</h1>
            <div css={[styles, school]}>
              <div css={header}>
                <h2>Oregon State University</h2>
                <i>2016-2020</i>
              </div>
              <div css={header}>
                <h3>Computer Science, B.S.</h3>
                <i>Corvallis, OR</i>
              </div>
            </div>
          </div>
          <div css={[divstyles, skilldiv]}>
            <h1 id="skills">Skills</h1>
            <div css={styles}>
              <div css={skills}>
                <div>
                      <p>Java</p>
                      <p>Python</p>
                      <p>C</p>
                      <p>C++</p>
                      <p>CSS</p>
                      <p>HTML</p>
                    </div>
                      <p>JavaScript</p>
                      <p>React</p>
                      <p>Swift</p>
                      <p>iOS</p>
                      <p>Git</p>
                    <div>
                      <p>MySQL</p>
                      <p>JSON</p>
                      <p>Haskell</p>
                      <p>Xcode</p>
                    </div>
                    <div>
                      <p>Android Studio</p>
                      <p>SharePoint Online</p>
                      <p>Agile Development</p>
                    </div>
                  </div>
                </div>
              </div>
          <div css={divstyles}>
            <div css={styles}>
              <h1 id="coursework">Coursework</h1>
                <div css={courses}>
                  <Courses />
                </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
