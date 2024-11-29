import React from 'react';
import '../styles/buttons.css';

function HeaderButton({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      + New
    </button>
  );
}

export default HeaderButton;
