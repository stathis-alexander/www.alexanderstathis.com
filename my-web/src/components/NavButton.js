import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import classNames from 'classnames';

class NavButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.props.handler(this.props.name);
  }

  render() {
    const isActive = this.props.current === this.props.name;

    return (
      <button
        onClick={this.onClick}
        className={classNames({
          bigbutton: true,
          active: isActive,
        })}>
        {this.props.name}
      </button>
    );
  }
}

export default withRouter(NavButton);
