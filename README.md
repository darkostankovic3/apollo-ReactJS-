# React Material Admin Full — Material-UI Dashboard Template

Built with [React](https://facebook.github.io/react/), [Material-UI](https://material-ui.com), [React Router](https://reacttraining.com/react-router/).
**No jQuery and Bootstrap!**

**This version uses React 16.8.6, React Router v5, MaterialUI v4, built with React Hooks and React Context (No Redux)**


![image](/src/images/readme_main_image.png)

## These areas have been completed and have been reviewed  (**OTHER COMPONENTS ARE STILL IN DEVELOPMENT**)

- Apex Charts
- ReCharts
- Tables

## Features

- React (**16.8.6**)
- React Hooks
- React Context
- **No jQuery and Bootstrap!**
- Mobile friendly layout (responsive)
- Create-react-app under the hood
- React Router v5
- Material-UI v4
- Modular Architecture
- CSS-in-JS styles
- Styled Components
- Webpack build
- Stylish, clean, responsive layout
- Authentication

## Pages

We have implemented some basic pages, so you can see our template in action.

- Dashboard
- E-commerce (Product Management, Products Grid, Product Page)
- Typography
- Tables (Static, dynamic)
- Forms
- Notifications
- Charts
- Icons
- Maps
- Login
- Error

## Quick Start

### 1. Get the latest version

You can start by cloning the latest version of React Dashboard on your
local machine by running:

```shell
$ git clone ssh://git@gitlab.ims.io:2222/skunkworks/apollo-react-next-material-theme.git
$ cd apollo-next-material-ui-theme
```

### 2. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

### 3. Run `yarn start`

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

### 4. Run `yarn lint`

Lints the app code to ensure they meet this project's linting rules.

### 5. Run `yarn test`

Runs all tests to prevent regressions. Note that the tests are run within Docker to standardize visual regression testing. [Docker](https://docs.docker.com/get-docker/) and docker-compose (which comes bundled with Docker installations for Mac & Windows) must be installed.

If tests are failing and you have checked to ensure that the visual regression change is expected and looks good, you can update the 'failing' visual regression tests by typing the 'u' key and hitting enter in the live test view that's running when you run 'yarn test'

#### For Windows Users
Windows does not come with the necessary support for 'Makefiles' that is used for this project's testing. Please use the `yarn test:win` command instead.

### 6. Run `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## License

[MIT](https://github.com/flatlogic/react-material-dashboard/blob/master/LICENSE.txt).
