/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';

const pic = css `
  display: inline-block;
  margin-left: 40px;
`;
const bio = css`
  padding: 10px;
  display: inline-block;
  width: 800px;
`;

function About() {
  return (
    <Layout>
        <h1>About Me</h1>
        <div css={pic}>
          <img src="/megan.jpeg" alt="me" width="450" height="300"/>
        </div>
        <div css={bio}>
          <p>Hi! My name is Megan and I am a web development enthusiast.
          I have a passion for UX and UI. I love making people feel good about the
          websites they interact with.</p>
        </div>
    </Layout>
  );
}

export default About;
