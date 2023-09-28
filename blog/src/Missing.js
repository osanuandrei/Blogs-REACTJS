import React from 'react';
import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <main>
      <h2>Post Page not found</h2>
          <p>Do not be dissapointed</p>
          <Link to = "/">Visit our HomePage</Link>
    </main>
  );
};

export default Missing;
