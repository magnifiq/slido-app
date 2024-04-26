# slido-app

The used stack of technologies: React, TypeScript, Jest, Material-UI, Styled-components.

## Getting Started

To start developing your React app:

1. Clone this repository.
2. Move to the directory slido-app `cd slido-app`.
3. Install dependencies with `npm install`.
4. Run `npm run dev` to start the development server.
5. Open your browser and navigate to `http://localhost:5173`.

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs ESLint to lint the code.
- `preview`: Previews the production build locally.
- `test`: Runs Jest tests.

## Task

Write a React web app with a single welcome screen with the "Getting started" button in the middle of the screen. Show the Application Name, OS Platform, and the version at the bottom of the page. The app will be loaded with these query string parameters:
- apphost=AcmeDesktopApp (app name)
- appversion=1.1.0
- os=win, or os=mac

If the React app is loaded using an outdated platform version, display an "Update required" screen:
- For `os=win` platform, any app version older than 1.5.0 is outdated.
- For `os=mac` platform, any app version older than 0.28.0 is outdated, as well as versions 1.5.100, 1.5.120, 1.5.123.

Write a Jest test for the situation when the Update required screen should and should not be shown
