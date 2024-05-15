import { useState } from 'react';
import { GitHubUser } from '../GitHubUser';

export function GitFetchSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data.items);
      console.log(data);
    } catch (error) {
      console.error('Error searching for users:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* Passa l'username dell'utente al componente GitHubUser */}
            <GitHubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}
