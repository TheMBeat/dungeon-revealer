const themeToggleButton = document.getElementById('theme-toggle');
const themePreferenceKey = 'userThemePreference';
const darkThemePath = 'wiki/darkmode.css';

function applyTheme(theme) {
    let link = document.querySelector('link[href="' + darkThemePath + '"]');
    if (theme === 'dark') {
        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = darkThemePath;
            document.head.appendChild(link);
        }
    } else {
        if (link) {
            document.head.removeChild(link);
        }
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem(themePreferenceKey);
    applyTheme(savedTheme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem(themePreferenceKey) === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themePreferenceKey, currentTheme);
    applyTheme(currentTheme);
}

themeToggleButton.addEventListener('click', toggleTheme);

loadTheme();
