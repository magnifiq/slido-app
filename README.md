# slido-app

## Getting Started

To start developing your React app:

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Run `npm run dev` to start the development server.
4. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Runs ESLint to lint the code.
- `preview`: Previews the production build locally.
- `test`: Runs Jest tests.

## Expanding ESLint Configuration

If you are developing a production application, we recommend updating the ESLint configuration to enable type-aware lint rules. Follow these steps:

1. Configure the top-level `parserOptions` property in `.eslintrc.js`.
2. Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
3. Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
4. Install `eslint-plugin-react` and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.

## Task

Write a React web app with a single welcome screen with the "Getting started" button in the middle of the screen. Show the Application Name, OS Platform, and the version at the bottom of the page. The app will be loaded with these query string parameters:
- apphost=AcmeDesktopApp (app name)
- appversion=1.1.0
- os=win, or os=mac

If the React app is loaded using an outdated platform version, display an "Update required" screen:
- For `os=win` platform, any app version older than 1.5.0 is outdated.
- For `os=mac` platform, any app version older than 0.28.0 is outdated, as well as versions 1.5.100, 1.5.120, 1.5.123.
