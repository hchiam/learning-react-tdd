# Learning React TDD

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Tutorials I'm following:

## Newer: `@testing-library/react` built into `create-react-app`

(See `newer-tdd` folder for more info.)

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
  }
}
```

## Older: `react-testing-library`

<https://www.freecodecamp.org/news/quick-guide-to-tdd-in-react-81888be67c64/> (NOTE: old dependencies being used in this old tutorial.)

```json
{
  "dependencies": {
    "axios": "0.18.0",
    "axios-mock-adapter": "1.14.1",
    "react": "16.3.0",
    "react-dom": "16.3.0",
    "react-scripts": "1.1.0",
    "react-testing-library": "2.0.0"
  },
}
```

- `axios` -> https
- `axios-mock-adapter` -> mock https GET response
- `react`, `react-dom` -> JSX syntax in .js file
- `react-scripts` -> convenient CLI commands
- `react-testing-library` -> testing (see .test.js file in tests folder) -> `render(...)`, `Simulate.click(...)`, `await wait(...)`:
  - in turn, `render(...)` gives you: `getByText`, `queryByText`, `getByTestId`, `queryByTestId`, `container`, etc.

## Run tests

```bash
yarn # just once
yarn test # -> will automatically re-run when you hit save
```

## Run demo

```bash
yarn # if you haven't already
yarn start # -> http://localhost:3000
```

---

[![generator-hchiam-learning](https://img.shields.io/badge/built%20with-generator--hchiam--learning-brightgreen.svg)](https://github.com/hchiam/generator-hchiam-learning) [![Build Status](https://travis-ci.org/hchiam/learning-react-tdd.svg?branch=master)](https://travis-ci.org/hchiam/learning-react-tdd) [![Coverage Status](https://coveralls.io/repos/github/hchiam/learning-react-tdd/badge.svg?branch=master)](https://coveralls.io/github/hchiam/learning-react-tdd?branch=master)

You can generate a [dependency graph](https://github.com/hchiam/learning-dependency-cruiser) with `bash show_dep_graph.sh`.

You can publish a live site to [surge](https://github.com/hchiam/learning-surge) with `bash publish_live_site.sh` (Just go into the relevant enclosing `src` or `public` folder of your site files - a CNAME file is there for convenience).

This file was first created using the Yeoman generator [`generator-hchiam-learning`](https://www.npmjs.com/package/generator-hchiam-learning).
