# System Echo (UI)

Prerequisites

- https://github.com/jvalentino/sys-alpha-bravo
- https://github.com/jvalentino/sys-charlie
- https://github.com/jvalentino/sys-delta

This is an example system that it used to demonstrate different architectural approaches as they relate to scalability. Its core functions are the following:

- The system shall allow a user to add documents
- The system shall version documents
- The system shall allow a user to download a document

This specific implementation uses a 3-tier architecture, where the front-end has been broken into its own independent application is separately load balanced.

It specifically now consists of two repositories

- https://github.com/jvalentino/sys-echo-rest
- https://github.com/jvalentino/sys-echo-ui

For a full architecture description please see https://github.com/jvalentino/sys-echo-rest

# Developer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
