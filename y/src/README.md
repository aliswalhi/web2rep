# Pomodoro Timer

A simple, web-based Pomodoro Timer built with HTML, CSS, and JavaScript, bundled using Webpack. This application helps users manage their time using the Pomodoro Technique, alternating between work sessions (default 25 minutes) and breaks (default 5 minutes), with a long break (15 minutes) after every four work sessions.

## Features
- Customizable work and break durations.
- Visual progress bar to track session completion.
- Audio notification when switching between work and break modes.
- Responsive design with a clean, modern UI.
- Start, Pause, and Reset controls for flexible session management.

## Implementation Choices
- **HTML/CSS/JavaScript**: Chosen for simplicity and broad browser compatibility. The UI is styled with CSS for a polished look, and JavaScript handles the timer logic.
- **Webpack**: Used as a module bundler to manage assets (JS, CSS, HTML) efficiently, enabling a modern development workflow with live reloading via Webpack Dev Server.
- **Modular Structure**: Files are split into `src/index.html` (structure), `src/styles.css` (styling), and `src/script.js` (logic) for maintainability and scalability.
- **Dynamic Timer**: The timer automatically switches between work and break modes, with a recursive `startTimer` call to maintain continuity without manual intervention.
- **Progress Bar**: Implemented with CSS transitions for smooth visual feedback, calculated based on the remaining time relative to the total duration.
- **Audio Feedback**: An external freesound.com i download sound  is used for notifications, with error handling to ensure compatibility across browsers.

## Prerequisites
- **Node.js**: Version 16+ (tested with v22.12.0).
- **npm**: Version 8+ (comes with Node.js).

## Installation
1. **Clone or Download**:
   - If using Git: `git clone <repository-url>` (replace with your repo URL if applicable).
   - Otherwise, download and extract the project folder to `C:\Users\YourUsername\Desktop\p2`.

2. **Navigate to Project Directory**:
   ```powershell
   cd C:\Users\YourUsername\Desktop\y