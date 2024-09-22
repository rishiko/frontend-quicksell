// components/TicketCard.js
import React from 'react';
// import './TicketCard.css';

function TicketCard({ ticket, users }) {
  const user = users.find((u) => u.id === ticket.userId);
  const priorityLevels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No Priority',
  };

  return (
    <div className="ticket-card">
      <h3 className="ticket-title">{ticket.title}</h3>
      <p><strong>ID:</strong> {ticket.id}</p>
      <p><strong>Assigned to:</strong> {user ? user.name : 'Unassigned'}</p>
      <p><strong>Priority:</strong> {priorityLevels[ticket.priority]}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
