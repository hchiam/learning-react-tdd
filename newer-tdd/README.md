# A newer tutorial for React + TDD

See `App.test.js` for a super simple example of `@testing-library/react`.

See `hidden-message.test.js` for an example of `@testing-library/jest-dom/extend-expect`, which lets you:

- simulate user actions like `fireEvent.click`
- check the DOM with `screen.queryByText` (element or null) or `screen.getByText` (element or error)

Tutorial being followed: <https://github.com/testing-library/react-testing-library>

Instead of the older `react-testing-library`, this demo uses `@testing-library/react`, which is built into `create-react-app`.

```bash
# starting withing learning-react-tdd folder:
npx create-react-app newer-tdd
cd newer-tdd
yarn test
```

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
  }
}
```
