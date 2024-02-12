import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>App Title</h1>
          <ThemeToggleButton />
        </header>
        <main style={{ flex: 1 }}>
          {/* Content and other components that respond to theme changes */}
        </main>
        <footer style={{ padding: '20px', textAlign: 'center' }}>
          Footer Content
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
