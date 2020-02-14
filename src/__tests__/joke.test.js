// components setup:
import React from 'react';
import Joke from '../joke';

// testing library setup:
import {render} from 'react-testing-library';

test('minimal test, using Joke component', () => {
  const {getByText} = render(
    <Joke text="Test Joke Text"></Joke>
  );
  expect(getByText('Test Joke Text')).toBeTruthy();
});
