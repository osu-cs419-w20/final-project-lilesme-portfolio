/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';

const parallax1 = css `
  margin-top: 60px;
  background-image: url('trees.jpeg');
  min-height: 1100px;
  min-width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const parallax2 = css `
  margin-top: 55px;
  background-image: url('osu-background.jpg');
  min-height: 990px;
  min-width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

const caption = css`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
`;

const border = css`
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 30px;
  letter-spacing: 10px;
`;

const words = css `
  color: #777;
  background-color: white;
  text-align: center;
  font-size: 24px;
  line-height: 24px;
`;

const paragraph = css `
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #777;
  background-color: white;
  text-align: justify;
  padding: 20px;
`;

const subtitle = css `
  text-align: center;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 900;
  color: #111;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const arrows = css`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
  }
}
`;


function Home() {
  return (
    <Layout>
      <div css={parallax1}></div>
      <div css={caption}>
        <span css={border}>MEGAN LILES</span>
        <br/>
        <br/>
        <br/>
        <div css={arrows}></div><br/>
        <div css={arrows}></div><br/>
        <div css={arrows}></div>
      </div>
      <div css={words}>
        <span css={subtitle}>WEB DEVELOPER</span>
        <span css={subtitle}>MOBILE DEVELOPER</span>
        <span css={subtitle}>UX/UI DESIGN</span>
      </div>
      <div css={parallax2}></div>
      <div css={words}>
        <h3 css={subtitle}>WELCOME</h3>
        <p css={paragraph}>I am currently actively looking for full time positions in the
          Computer Science world as a Web Developer, Software Engineer, Mobile
          App Developer or anything in the UX industry! I will be graduating
          June 2020 from Oregon State University with a Bachelor's in Computer
          Science. Feel free to look around and check out my resume and github projects!</p>
      </div>
    </Layout>
  );
}

export default Home;
