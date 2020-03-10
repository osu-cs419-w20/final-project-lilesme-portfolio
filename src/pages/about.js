/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';
import Spotify from '../components/Spotify';

const pic = css `
  display: inline-block;
  margin-left: 40px;
  border: solid black 2px;
`;
const bio = css`
  padding: 10px;
  display: inline-block;
  width: 800px;
`;

const divs = css`
  h2 {
    text-align: center;
    font-size: 40px;
  }
`;
const hobbies = css`
  display: inline-block;
  img {
    width: 250px;
    height: 310px;
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
        <h1>About Me</h1>
        <div css={divs}>
          <div css={pic}>
            <img src="/megan.jpeg" alt="me" width="450" height="300"/>
          </div>
          <div css={bio}>
            <p>Hi! My name is Megan and I am a web development enthusiast.
            I have a passion for UX and UI. I love making people feel good about the
            websites they interact with.</p>
          </div>
          <div css={imagecontainer}>
            <h2>HOBBIES</h2>
            <div css={hobbies}>
              <img src="/golf.jpg"/>
              <p>Golfing</p>
            </div>
            <div css={hobbies}>
              <img src="/hike.jpg"/>
              <p>Hiking</p>
            </div>
            <div css={hobbies}>
              <img src="/wakeboard.jpg"/>
              <p>Water Sports</p>
            </div>
            <div css={hobbies}>
              <img src="/camping.jpg"/>
              <p>Camping</p>
            </div>
          </div>
          <div>
            <h2>ACTIVITIES</h2>
          </div>
          <div>
            <h2>ACCOMPLISHMENTS</h2>
          </div>
          <div>
            <h2>INSTAGRAM</h2>
          </div>
          <div>
            <h2>SPOTIFY</h2>
            <Spotify />
          </div>
        </div>
    </Layout>
  );
}

export default About;
