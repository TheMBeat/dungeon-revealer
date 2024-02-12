import React, { Component } from 'react';
import { DarkModeManager } from '../utils/DarkModeManager';

class App extends Component {
  state = {
    isDarkModeEnabled: false,
  };

  componentDidMount() {
    const isDarkMode = DarkModeManager.isDarkModeEnabled();
    this.setState({ isDarkModeEnabled: isDarkMode });
  }

  handleDarkModeToggle = () => {
    DarkModeManager.toggleDarkMode();
    this.setState(prevState => ({
      isDarkModeEnabled: !prevState.isDarkModeEnabled,
    }));
  };

  render() {
    const { isDarkModeEnabled } = this.state;
    return (
      <div className={`App ${isDarkModeEnabled ? 'dark-mode' : ''}`}>
        <button onClick={this.handleDarkModeToggle}>
          Toggle Dark Mode
        </button>
        {/* Rest of the component */}
      </div>
    );
  }
}

export default App;
