import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>PPIC Dashboard</h1>
      <ul>
        <li>
          Production Schedule
          <ul>
            <li>Injection Moulding</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
