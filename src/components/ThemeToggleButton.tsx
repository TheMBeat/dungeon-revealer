import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        color: theme === 'light' ? '#333' : '#FFF',
        border: `2px solid ${theme === 'light' ? '#333' : '#FFF'}`,
        borderRadius: '5px',
        transition: 'all 0.3s ease',
      }}
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
