# ABB PARTS DATA APP (server side)

This project contains the server code of a tech test for ABB. This little server is done in NODEJS, its execution is necessary to provide data [Mock Data for now] to the front end client.

## `How to start?`

-   First, we should go inside the node project.
-   Then, install the dependecies and the devDependecies
-   Last step, start the project.

### `Getting inside the node project`

_being on the ABB folder, please follow the next commands in any **CMD**_

```sh
$ cd ABB/Server
```

### `Installing dependencies`

```sh
$ npm install
```

### `Starting the project`

```sh
$ npm start
```

You will find the project running at the **CMD** in the _**port 1234**_

Let's have fun,

-   Start the project
-   Check the results
-   Modify the data entries in: Server/data/parts.json

# TO DO

-   **Pagination or update**: the data is send every 10 seconds, if the information is replaced/updated, it just should send the new info, if the information is storaged, it should have pagination to save memory.

-   **Data structure revision**: the data structure should be validated to know if it is correct or if it needs any fix.

-   **Create and connect the database**: after validate the data structure we should procede to create the database to stop using mocked data.
