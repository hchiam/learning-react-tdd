// components setup:
import React from 'react';
import Joke from './joke';

// setup to do https calls:
import * as axios from 'axios';

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false,
  };

  loadJoke = async () => {
    this.setState({loading: true});
    const {data: {value: {joke}}} = await axios.get('https://api.icndb.com/jokes/random');
    this.setState({loading: false, joke});
  };

  render() {
    const {joke, loading} = this.state;
    return (
      <React.Fragment>
        {!joke && !loading && <div>You haven't loaded a joke yet!</div>}
        {loading && <div>Loading...</div>}
        {joke && !loading && <Joke text={joke}/>}
        <button onClick={this.loadJoke} type="button">
          Load a random joke
        </button>
      </React.Fragment>
    );
  }
};
