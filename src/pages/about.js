/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';
import Spotify from '../components/Spotify';

const background = css `
margin-top: 60px;
background-image: url('sky.jpg');
min-height: 1100px;
min-width: 100%;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: 100%;
`;
const pic = css `
  display: inline-block;
  margin-left: 40px;
  img {
    border-radius: 15px;
  }
`;
const bio = css`
  padding: 10px;
  display: inline-block;
  width: 800px;
`;

const divs = css`
  display: inline-block;
  h2 {
    text-align: center;
    font-size: 40px;
  }
`;
const hobbies = css`
  display: inline-block;
  img {
    width: 450px;
    height: 510px;
    border-radius: 15px;
    padding: 10px;
  }
`;

const imagecontainer = css`
  text-align: center;
`;

function About() {
  return (
    <Layout>
        <div css={background}>
          <h1>About Me</h1>
          <div css={divs}>
            <div css={pic}>
              <img src="/megan.jpeg" alt="me" width="600" height="400"/>
            </div>
            <div css={bio}>
              <p>Hi! My name is Megan and I am a web development enthusiast.
              I have a passion for UX and UI. I love making people feel good about the
              websites they interact with............Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.</p>
            </div>
            <div css={imagecontainer}>
              <h2>HOBBIES</h2>
              <div css={hobbies}>
                <img src="/golf.jpg"/>
                <h3>Golfing</h3>
              </div>
              <div css={hobbies}>
                <img src="/hike.jpg"/>
                <h3>Hiking</h3>
              </div>
              <div css={hobbies}>
                <img src="/wakeboard.jpg"/>
                <h3>Water Sports</h3>
              </div>
              <div css={hobbies}>
                <img src="/camping.jpg"/>
                <h3>Camping</h3>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default About;
