import React, { Component } from 'react';
import Main from '../components/Main';
import ErrorBoundary from './Error';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    );
  }
}

export default App;
