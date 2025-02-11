This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenge Comment

### Types
Sorry, I didn't have enough time to cover all remo with types.

But that is definitely first thing I would do in same real project, using TypeScript of course.

### Styles
Styles are not good in current implementaion. Add ~20 view components and there will be many class-names conflicts and intersections.

Styled-components or frameworks like TailwindCSS would fix this problem.

It's easy to add Styled-components later without rewriting all project styles.

### Store
Redux is one of the best store solutions in my opinion, especially if we use REST API.

Unlike styles, changing the data store in the future is not easy, so I added Redux.

### Testing
Just made a couple of view and store tests.

### Absolyte paths
Yes, first thing to do.

### Optimizations
> “The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.”
> Donald Knuth

React components are easy to optimize if component tree and store are made well.

I refactored root component and added Redux store to make optimization easier when we need it.

## Getting started

Configure environment

Write a file `.env` in the projects root directory.

```bash
YELP_API_KEY=[Yelp API key]
REACT_APP_GOOGLE_MAPS_API_KEY=[Google Map API]
```

Install dependencies

```shell
$ yarn install
```

Start the server and client

```shell
$ yarn server
$ yarn start
```

## Available Scripts

In the project directory, you can run:

### `yarn server`

Runs the node server for development.<br />
It will run on http://localhost:5000/<br />

Open [http://localhost:5000/-/ping](http://localhost:5000/-/ping) to check if running in the browser.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
