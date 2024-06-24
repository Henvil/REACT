import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

function ShowGithubUser({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error("Errore nel recupero dei dati utente");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      <h2>Dati utente GitHub di {username}</h2>
      {userData ? <GithubUser userData={userData} /> : <p>Caricamento...</p>}
    </div>
  );
}

export default ShowGithubUser;
