import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [data, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [username]);

  return (
    <div className="gitCard">
      {data && (
        <>
          <img src={data.avatar_url} alt="User avatar" />
          <div className="gitContentCard">
            <h3>{data.login}</h3>
            <div>{data.name}</div>
          </div>
        </>
      )}
      {error && <div>{error.message}</div>}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default GithubUser;
