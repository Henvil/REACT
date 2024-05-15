import { useGithubUser } from './useGithubUser';

export function GitHubUser({ username }) {
  const { data, error, loading } = useGithubUser(username);

  return (
    <div className="gitCard">
      {data && (
        <>
          <img className="gitContentImg" src={data.avatar_url} />
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
