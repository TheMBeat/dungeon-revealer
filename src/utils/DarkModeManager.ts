class DarkModeManager {
  private darkModeKey: string;

  constructor() {
    this.darkModeKey = 'darkMode';
  }

  enableDarkMode(): void {
    localStorage.setItem(this.darkModeKey, 'true');
  }

  disableDarkMode(): void {
    localStorage.setItem(this.darkModeKey, 'false');
  }

  toggleDarkMode(): void {
    const isCurrentlyEnabled = this.isDarkModeEnabled();
    localStorage.setItem(this.darkModeKey, isCurrentlyEnabled ? 'false' : 'true');
  }

  isDarkModeEnabled(): boolean {
    const storedValue = localStorage.getItem(this.darkModeKey);
    return storedValue === 'true';
  }
}

export { DarkModeManager };
