import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import ViewStudents from './Components/ViewStudents';
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory({ basename: 'demo-app'});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-student" component={AddStudent} />
            <Route exact path="/view-students" component={ViewStudents} />
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);
