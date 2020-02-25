import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import Routes from './components/Header/Router'
import loader from './components/Loader/Main'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loader()}>
          <Switch>
            <Routes />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
