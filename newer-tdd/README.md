# A newer tutorial for React + TDD

## Key summary notes :key:

```bash
yarn add --dev @testing-library/jest-dom
yarn add --dev @testing-library/react
yarn add --dev @testing-library/user-event
```

```js
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
<!-- or -->
import { render } from '@testing-library/react';
render(...)
expect(screen.queryByText(...))...
fireEvent.click(...)
expect(screen.getByText(...))...
```

## Examples

See `App.test.js` for a super simple example of `@testing-library/react`.

See `hidden-message.test.js` for an example of `@testing-library/jest-dom/extend-expect`, which lets you:

## More notes

- simulate user actions like `fireEvent.click`
- check the DOM with `screen.queryByText` (element or null) or `screen.getByText` (element or error)

Tutorial being followed: <https://github.com/testing-library/react-testing-library>

Instead of the older `react-testing-library`, this demo uses `@testing-library/react`, which is built into `create-react-app`.

## Create a project from scratch

```bash
# starting withing learning-react-tdd folder:
npx create-react-app newer-tdd
cd newer-tdd
yarn test
```

## Dependencies used in this sub-folder example

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
  }
}
```
