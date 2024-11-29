import React from 'react';
import Sidebar from './components/Sidebar';
import HeaderButton from './components/HeaderButton';
import InjectionTable from './components/InjectionTable';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <HeaderButton onClick={() => console.log('Add new entry')} />
        <InjectionTable />
      </div>
    </div>
  );
}

export default App;
