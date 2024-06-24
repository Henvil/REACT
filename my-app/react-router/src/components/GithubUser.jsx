function GithubUser({ userData }) {
  return (
    <div>
      <p>Nome utente: {userData.login}</p>
      <p>Nome completo: {userData.name}</p>
      <p>Biografia: {userData.bio}</p>
      <p>Numero di repository: {userData.public_repos}</p>
      <img
        src={userData.avatar_url}
        alt="Avatar utente"
        style={{ width: 100, height: "auto" }}
      />
    </div>
  );
}

export default GithubUser;
