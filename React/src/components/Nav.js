import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import NavButton from './NavButton';

class Nav extends Component {
  constructor(props) {
    super(props);

    const path = this.props.history.location.pathname.slice(1)
      ? this.props.history.location.pathname.slice(1)
      : 'about';
    console.log(this.props.history.location.pathname);
    this.state = {current: path};

    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked = name => {
    this.setState({current: name});
    this.props.history.push('/' + name);
  };

  render() {
    return (
      <nav>
        <NavButton
          name="about"
          handler={this.handleClicked}
          current={this.state.current}
        />
        <NavButton
          name="professional"
          handler={this.handleClicked}
          current={this.state.current}
        />
        <div className="empty" />
        <div className="socialmedia">
          <a
            href="https://www.facebook.com/alex.stathis"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              id="fb"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path />
            </svg>
          </a>
          <a
            href="https://www.github.com/stathis-alexander"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              id="gh"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/alexanderstathis"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              id="insta"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/alexstathis"
            target="_blank"
            rel="noreferrer noopener">
            <svg
              id="in"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path />
            </svg>
          </a>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
