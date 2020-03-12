/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import queryString from 'query-string';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';

import { Input, Button } from '../components/FormComponents';
import Spinner from '../components/Spinner';
import ErrorContainer from '../components/ErrorContainer';

import Layout from '../components/Layout';

const search = css `
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  font-family: 'Nunito', sans-serif;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const results = css `
  display: inline-block;
  text-align: center
  width: 800px;
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    text-decoration:  none;
    background-color: lightgrey;
    border: lightgrey 1px;
    width: 90px;
    color: black;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
  }
  p {
    display: inline-block;
    padding: 10px;
  }
  h4 {
    display: inline-block;
    padding: 10px;
  }
`;


function Github() {
  const router = useRouter();
  const query = router.query.q;
  const [ inputQuery, setInputQuery ] = useState(query || "");
  const [ repos, setRepos ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);


  useEffect(() => {
    if (query) {
      let ignore = false;
      const controller = new AbortController();

      async function fetchSearchResults() {
        let responseBody = {};
        setLoading(true);

        //console.log("== Fetching search results for query:", query);
        //setRepos(null);

        try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q={${query}+in:file+user:lilesme&sort=stars`,
          { signal: controller.signal }
        );
        responseBody = await response.json();
      } catch (e) {
          if (e instanceof DOMException) {
            console.log("== HTTP request aborted");
          } else {
            setError(true);
            console.log(e);
          }
        }
        if (!ignore) {
          setError(false);
          setLoading(false);
          setRepos(responseBody.items || []);
        } else {
          console.log("== ignoring results");
        }
        //setRepos(responseBody.items || []);
      }

      fetchSearchResults();
      return () => {
        controller.abort();
        ignore = true;
      };
    }
  }, [ query ]);

  return (
    <div>
      <Layout>
        <h1>Github</h1>
        <h2>Search my repositories on Github!</h2>
      </Layout>
    <div css={search}>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push(`${router.pathname}?q=${inputQuery}`);
      }}>
        <Input
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
        />
      <Button type="submit">Search</Button>
      </form>
      {error && <ErrorContainer>Error!</ErrorContainer>}
      {loading ? (
        <Spinner />
      ) :
        <div css={results}>
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <h4>{repo.full_name}</h4><p>{repo.description}</p><a href={repo.html_url}>View Repo</a>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  </div>
  );
};

export default Github;
