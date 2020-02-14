import React from 'react';
import ReactDOM from 'react-dom';
import JokeGenerator from './jokeGenerator';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => {
  return(
    <div style={styles}>
      <JokeGenerator/>
    </div>
  );
};

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
