import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import rootReducer from '@/reducers';

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}  />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;