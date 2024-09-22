// components/KanbanBoard.js
import React from 'react';
import TicketCard from './TicketCard';
// import './KanbanBoard.css';

function KanbanBoard({ tickets, users, groupBy, sortBy }) {
  const priorityLevels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority',
  };

  // Group tickets based on the selected grouping
  const groupedTickets = {};

  tickets.forEach((ticket) => {
    let groupKey;
    if (groupBy === 'status') {
      groupKey = ticket.status;
    } else if (groupBy === 'user') {
      const user = users.find((u) => u.id === ticket.userId);
      groupKey = user ? user.name : 'Unassigned';
    } else if (groupBy === 'priority') {
      groupKey = priorityLevels[ticket.priority];
    }

    if (!groupedTickets[groupKey]) {
      groupedTickets[groupKey] = [];
    }
    groupedTickets[groupKey].push(ticket);
  });

  // Sort tickets within each group
  Object.keys(groupedTickets).forEach((group) => {
    groupedTickets[group].sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority; // Descending priority
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title); // Ascending title
      }
      return 0;
    });
  });

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-column">
          <h2 className="column-title">{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
