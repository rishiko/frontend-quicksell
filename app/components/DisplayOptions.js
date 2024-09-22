// components/DisplayOptions.js
import React from 'react';
// import './DisplayOptions.css';

function DisplayOptions({ groupBy, setGroupBy, sortBy, setSortBy }) {
  return (
    <div className="display-options">
      <div className="option-group">
        <label>Group By:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="option-group">
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default DisplayOptions;
