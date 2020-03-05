/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';

const commentstyle = css`
  width: 600px;
  height: 600px;
`;

const labelstyle = css`
  text-align: center;
`;

const formstyle = css `
  position: relative;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(9,87,117, 0.6);
  border-radius: 15px;
  width: 700px;
  height: 700px;
  padding: 10px;
`;

function Contact() {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <div css={formstyle}>
        <form action="mailto:meganliles426@gmail.com" method="post" enctype="text/plain">
          <div css={labelstyle}>
            <div>
              <label for="name">Name:</label>
              <input type="text" name="name"></input><br/>
              <label for="email">Email:</label>
              <input type="text" name="mail"></input><br/>
              <label for="comment">Comment:</label><br/>
            </div>
            <input css={commentstyle} type="text" name="comment" size="50"/><br/><br/>
            <input type="submit" value="Send"></input>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Contact;
