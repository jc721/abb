# ABB PARTS DATA APP (client side)

This project contains the client code of a tech test for ABB, this app is made in React JS. The objective of this application is vissualize the Parts sent by the server side.

_Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## `How to start?`

-   First, we should go inside the client project.
-   Then, install the dependecies and the devDependecies
-   Last step, start the project.

### `Getting inside the react project`

_being on the ABB folder, please follow the next commands in any **CMD**_

```sh
$ cd ABB/Client/parts-app
```

### `Installing dependencies`

```sh
$ npm install
```

### `Starting the project`

```sh
$ npm start
```

You will find the project running in your browser in the _**[http://localhost:3000](http://localhost:3000)**_

Let's have fun,

-   Start the project
-   Check the results
-   Modify the data entries in: Server/data/parts.json

## You can also

### `Testing`

```sh
$ npm test
```

Launches the test runner in the interactive watch mode.

### `Build`

```sh
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# TO DO

-   **Testing**: this is an MVP, there is just one test in the project, the project is already prepared to start testing all the methods.

-   **Data structure revision**: the data structure should be validated to know if it is correct or if it needs any fix, after this, the frontend variables and methods names should be updated.

-   **Data size**: decide how much data should be allocated in the screen valuting how much the machine can have in memory.

-   **Fix the `whereToInsert` method**: the whereToInsert method is used for allocate rows and columns for any Feature recived using the size of the information to calculate how many rows and columns the grid needs to allocate well ordered the Feature block, it is not working properly right now.

-   **Styles and Icons**: the styles are not perfect yet and the icons are provisionals, the icons will be stored in the frontend or we are going to use an icon library, taking account of the extra size information we will need to storage.

-   **Type**: typing js helps us to avoid errors and make more descriptive our methods.
