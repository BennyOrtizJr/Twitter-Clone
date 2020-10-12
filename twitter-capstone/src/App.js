import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import TweetForm from './components/TweetForm/TweetForm'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route>
          <TweetForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
