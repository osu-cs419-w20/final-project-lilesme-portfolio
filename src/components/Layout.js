/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Navbar from '../components/Navbar';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  font-family: 'Roboto', sans-serif;
  h1 {
    padding-top: 40px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: rgb(9,88,117);
    font-size: 60px;
  }
  h3 {
    font-weight: 900;
  }
  p {
    text-align: center;
  }
  line-height: 20px;
`;

function Layout(props) {
  return (
    <div css={globalStyles}>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout;
