import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import Spinner from '../components/Spinner';
import ErrorContainer from '../components/ErrorContainer';

function Spotify() {
  const router = useRouter();
  const query = router.query.q;
  const [ songs, setSongs ] = useState([]);
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
      let ignore = false;
      const controller = new AbortController();

      async function fetchSpotifyData() {
        let responseBody = {};
        setLoading(true);
        try {
          console.log("Trying Fetch");
          const response = await fetch('https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=5&offset=5',
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer BQDEuD5-GV7XCVv6xJdrVsoHwyb1B9MNT8pafW1dqI-YaLbDbqgvw33paOK5DIsvfv1E4fc2eSMHIesn2B-gSN7MdcP6UEW2oobRsFU7doGE8gJCF5U0_JIo4l8AxxtE510pO9quobE_8ng2GhzPIQ'
            }}
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
            setSongs(responseBody.items || []);
          } else {
            console.log("== ignoring results");
          }
        }

        fetchSpotifyData();
        return () => {
          controller.abort();
          ignore = true;
        };
  }, []);

    return (
      <div>
        {error && <ErrorContainer>Error!</ErrorContainer>}
        {loading ? (
          <Spinner />
        ) :
          <ul>
            {songs.map((song, key) => (
              <li key={song[key].id}>
                <a href={song[key].preview_url}>{song[key].name}</a>
              </li>
            ))}
          </ul>
        }
      </div>
    );
}

export default Spotify;
