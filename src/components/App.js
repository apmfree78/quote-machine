import React from 'react';
import sampleQuotes from './quotes';

class App extends React.Component {

  state = {
    quotes:sampleQuotes
  }

  render() {

    return (
    <h2>IT WORKS!</h2>
    );
  }
}
export default App;