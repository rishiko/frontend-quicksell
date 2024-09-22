// App.js
"use client"
// App.js
import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';
// import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status'); // default grouping
  const [sortBy, setSortBy] = useState('priority'); // default sorting

  // Load view state from localStorage
  useEffect(() => {
    const savedGroupBy = localStorage.getItem('groupBy');
    const savedSortBy = localStorage.getItem('sortBy');
    if (savedGroupBy) setGroupBy(savedGroupBy);
    if (savedSortBy) setSortBy(savedSortBy);
  }, []);

  // Fetch data from local sample-data.json
  useEffect(() => {
    fetchData();
  }, []);

  // Save view state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.quicksell.co/v1/internal/frontend-assignment `);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <Navbar
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
