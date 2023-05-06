import React from 'react';
import './Navigation.css';

const Navigation = ({ filter, setFilter }) => {
  return (
    <nav className="navigation">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
        All
      </button>
      <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
        Completed
      </button>
      <button className={filter === 'remaining' ? 'active' : ''} onClick={() => setFilter('remaining')}>
        Remaining
      </button>
      <button className={filter === 'deleted' ? 'active' : ''} onClick={() => setFilter('deleted')}>
        Deleted
      </button>
    </nav>
  );
};

export default Navigation;
