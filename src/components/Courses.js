/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import courses from '../data/courses.json';
const tablestyle = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  margin-left: auto;
  margin-right: auto;
  th {
    background-color: rgb(175,203,255);
    color: white;
    border-bottom: 1px solid #ddd;
  }
  td {
    padding: 3px;
  }
  width: 90%;
  tr:nth-child(even) {background-color: rgb(175,203,255, 0.6);}
  tr:hover {background-color: #f5f5f5;}
  td {
    border-bottom: 1px solid #ddd;
    min-width: 70px !important;
  }
`;


function Courses() {
  return (
    <div css={tablestyle}>
      <table>
        <th>Course</th>
        <th>Name</th>
        <th>Description</th>
      {courses && courses.map((course, key) => {
        return (
          <tr>
            <td>{courses[key].courseId}</td>
            <td>{courses[key].name}</td>
            <td>{courses[key].description}</td>
          </tr>
        );
      })}
      </table>
    </div>
  );
}

export default Courses;
