import React, { useState } from 'react';
import Sidebar from '../Sidebar';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;