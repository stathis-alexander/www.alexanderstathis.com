import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header.js';
import Nav from './components/Nav.js';

import Professional from './components/content/Professional.js';
import About from './components/content/About.js';
import NotFound from './components/content/NotFound.js';

import './style/main.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    const rand = Math.floor(Math.random() * 100) % 5;
    const pathStr = './style/color/' + rand.toString() + '.css';

    this.state = {
      stylePath: pathStr,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <Router>
        <link rel="stylesheet" type="text/css" href={this.state.stylePath} />

        <Header />
        <div className="body-container">
          <Route render={() => <Redirect to={{pathname: '/about'}} />} />
          <Route path="/" component={Nav} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/professional" component={Professional} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
