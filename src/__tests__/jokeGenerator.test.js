// components setup:
import React from 'react';
import Joke from '../joke';
import JokeGenerator from '../jokeGenerator';

// testing libraries:
import {render, Simulate, wait} from 'react-testing-library';
import 'dom-testing-library/extend-expect';
import * as axios from 'axios';
import MockAxios from 'axios-mock-adapter';

// create mock with random response delay:
const mock = new MockAxios(axios, {
  delayResponse: Math.random() * 500,
});
// restore mock after running all tests in this file:
afterAll(() => mock.restore()); // (NOTE: in this case, don't really need this line)

// the test is described bt the next line:
test('Joke component receives props and then renders text', () => {
  // render a page with just one component and a prop with text to display:
  // (NOTE: render() returns functions like getByText, which let us look inside the page)
  const {getByTestId, container, getByText} = render(
    <Joke text="Funniest joke this year."/>
  );
  expect(getByTestId('joke-text'))
    .toHaveTextContent('Funniest joke this year');
  
  // try rendering the component again:
  // (NOTE: by passing the container from a previous render, we use the same component, not another instance)
  render(<Joke text="Not a very funny one..."/>, {container});
  expect(getByText('Not a very funny one...')).toBeTruthy();
});

test('"JokeGenerator component fetches a random joke and renders it', async () => {
  // set up mock GET response:
  mock.onGet().replyOnce(200, {
    value: {
      joke: 'Really funny joke!',
    },
  });
  // render a page with just one component:
  // (NOTE: render() returns functions that let us look inside the page)
  const {getByText, queryByText, queryByTestId} = render(<JokeGenerator/>);
  // before click:
  expect(getByText(`You haven't loaded a joke yet!`))
    .toBeInTheDOM();
  // when click:
  Simulate.click(getByText('Load a random joke'));
  expect(queryByText(`You haven't loaded a joke yet!'`))
    .not.toBeInTheDOM();
  expect(queryByText('Loading...'))
    .toBeInTheDOM();
  // after click:
  // (NOTE: await requires this test to use async () => {...})
  await wait(() => expect(queryByText('Loading...'))
    .not.toBeInTheDOM()
  );
  expect(queryByTestId('joke-text')).toBeInTheDOM();
});
