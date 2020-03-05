/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import Link from 'next/link';

const styles = css `
  @import url('https://fonts.googleapis.com/css?family=Roboto:300&display=swap');
  font-family: 'Roboto', sans-serif;
  width: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  display: block;
  background-color: rgb(86,127,204);
  ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
  }
  li {
    font-size: 30px;
    float: left;
  }
  a {
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    text-align: center;
    &:hover {
      background-color: rgb(199, 198, 193);
      color: rgb(58, 63, 64);
    }
    &.active {
        background-color: rgb(199, 198, 193);
        color: rgb(58, 63, 64);
    }
  }
`;

function Navbar() {
  return (
    <nav css={styles}>
        <ul>
          <li>
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a>RESUME</a>
            </Link>
          </li>
          <li>
            <Link href="/github">
              <a>GITHUB</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
          <li>
            <Link href="/menu">
              <a>MENU</a>
            </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar;
