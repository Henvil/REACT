import React, { useState } from 'react';
import GitHubForm from './GitHubForm';
import GitHubUser from './GitHubUser';

function GitHubUserSearch() {
  const [searchedUsername, setSearchedUsername] = useState('');

  const handleSearchSubmit = (username) => {
    setSearchedUsername(username);
  };

  return (
    <div>
      <GitHubForm onSubmit={handleSearchSubmit} />
      {searchedUsername && <GitHubUser username={searchedUsername} />}
    </div>
  );
}

export default GitHubUserSearch;
