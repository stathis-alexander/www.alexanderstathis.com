import React, {Component} from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="content">
        <p> Hello. Something seems to have gone wrong. </p>

        <p>
          You've landed somewhere that's not so great. Try using any of the
          buttons above to find yourself a valid page.
        </p>
      </div>
    );
  }
}

export default NotFound;
