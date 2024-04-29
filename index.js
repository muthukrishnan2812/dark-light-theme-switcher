// index.js

class ThemeSwitcher {
    constructor() {
        this.theme = 'light'; // default theme
    }

    switchTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.body.className = this.theme;
        console.log(`Theme switched to ${this.theme}`);
    }
}

module.exports = ThemeSwitcher;
