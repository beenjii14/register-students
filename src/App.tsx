import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { getStore } from './shared/redux/store';
import AddStudent from './views/addStudents/addStudent';
import ShowStudents from './views/showStudents/showStudents';
import configureStore from './shared/redux/store';
import DetailStudent from './views/detailStudent/detailStudent';

import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import './App.scss';

class App extends Component {
  constructor(props: any) {
    super(props);
    configureStore();
  }

  render() {
    return (
      <div className="container-app">
      <Provider store={getStore()} >
        <HashRouter>
          <Switch>
            <Route path="/home" name="home" component={AddStudent} />
            <Route path="/students" name="list" component={ShowStudents} />
            <Route path="/details/:id" name="detail" component={DetailStudent} />
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
      </Provider>
      </div>
    );
  }
};

export default App;
