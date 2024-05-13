import { useEffect, useState } from 'react';

export function GitHubUser({ username }) {
  const [data, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
          <img src={data.avatar_url} />
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
