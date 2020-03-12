/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Layout from '../components/Layout';

const background = css `
  background-color: rgb(181,177,117);
  width: 1000px;
  height: 650px;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  margin-top: 100px;
  h2 {
    text-align: center;
    color: white;
    font-size: 30px;
  }
`;

const form = css `
  background-color: white;
  width: 900px;
  height: 500px;
  border-radius: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: center;
  input, textarea {
    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    width: 800px;
    border-radius: 10px;
    border: solid rgb(198, 205, 197) 1px;
    background-color: white;
    height: 50px;
    margin: 7px;
    :hover{
      background-color: lightgrey;
    }
  }
  .message {
    height: 250px;
    vertical-align: top;
  }
`;
const pic = css `
  margin-top: 60px;
  background-image: url('leaf.jpg');
  position: fixed;
  min-height: 1000px;
  min-width: 100%;
  opacity: 0.95;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  h1 {
    color: white;
  }
`;

function Contact() {
  return (
    <Layout>
      <div css={pic}>
        <div css={background}>
          <h2>Send Me A Message!</h2>
          <form action="mailto:meganliles426@gmail.com" method="post" enctype="text/plain">
            <div css={form}>
              <input type="text" placeholder="Name" name="name"></input><br/>
              <input type="text" placeholder="Email" name="mail"></input><br/>
              <textarea class="message" type="text" placeholder="Message" name="comment" size="50"/><br/><br/>
              <input type="submit" value="Send"></input>
            </div>
          </form>
        </div>
        </div>
    </Layout>
  );
}

export default Contact;
