import React from "react";
import * as axios from "axios";
import Joke from "../joke";
import JokeGenerator from "../jokeGenerator";
import { render, Simulate, wait } from "react-testing-library";
import MockAxios from "axios-mock-adapter";
import "dom-testing-library/extend-expect";

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
// Needed only when writing tests in CodeSandox
afterAll(() => mock.restore());

test("Joke component receives props and then renders text", () => {
  // Renders Joke component with some text prop.
  const { getByTestId, getByText, container } = render(
    <Joke text="The funniest joke this year." />
  );

  // Expects Joke component to render correct text.
  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke this year."
  );

  /*  Renderujemy nasz komponent jeszcze raz, ale tym razem przekazujemy
   *  już istniejący 'container'. Spowoduje to przerenderowanie tej samej
   *  instancji komponentu, a nie stworzenie nowej.
   */
  render(<Joke text="Not a very funny one..." />, { container });

  // Sprawdzamy czy komponent przerenderował się z nowymi propsami
  expect(getByText("Not a very funny one...")).toBeTruthy();
  //expect(container).toMatchSnapshot();
});

test("'JokeGenerator' component fetches a random joke a renders it", async () => {
  // Mocking response for axios.get(RANDOM_JOKE_URL) request
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Really funny joke!"
    }
  });

  // Rendering JokeGenerator component
  const { getByText, queryByText, queryByTestId } = render(<JokeGenerator />);

  /* Checking if a default text is being displayed when
   * no joke has been loaded yet. 
   */
  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDOM();

  // Simulating a button click in the browser
  Simulate.click(getByText("Load a random joke"));

  // Checking if the default text is no longer displayed.
  expect(queryByText("You haven't loaded any joke yet!")).not.toBeInTheDOM();

  // Checking if 'Loading...' is visible in the DOM.
  expect(queryByText("Loading...")).toBeInTheDOM();

  /*  'wait' method waits (4500ms by default) until a callback
   *  function stops throwing an error. It is being checked
   *  at 50ms intervals.
   *  
   *  Waiting until Loading message disappear from DOM
   */
  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDOM());

  // Checking if joke is being displayed.
  expect(queryByTestId("joke-text")).toBeInTheDOM();
});
