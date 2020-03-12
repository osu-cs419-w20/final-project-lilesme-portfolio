/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import courses from '../data/courses.json';

const style = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  ul {
    -moz-column-count: 2;
    -moz-column-gap: 20px;
    -webkit-column-count: 2;
    -webkit-column-gap: 20px;
    column-count: 2;
    column-gap: 20px;
    width: 800px;
  }
  float: left !important;

`;


function Courses() {
  return (
    <div css={style}>
      <ul>
      {courses && courses.map((course, key) => {
        return (
          <li>
            {courses[key].name}
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default Courses;
