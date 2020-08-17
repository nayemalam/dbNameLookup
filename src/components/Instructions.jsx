import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <p onClick={this.props.toggleInstructions}>
          {this.props.instructions ? 'Hide' : 'View'} Instructons?
        </p>
        <ul className={this.props.instructions ? 'instructions-list' : 'hide'}>
          <li style={{ listStyleType: 'none' }}>
            <u>
              Add a name to the <Link to="/names">Name List</Link>
            </u>
          </li>
          <li>
            Fill in the first name and/or last name and click{' '}
            <strong>submit</strong>
          </li>
          <br />
          <li style={{ listStyleType: 'none' }}>
            <u>Search for a name from the Name List</u>
          </li>
          <li>
            Try out any value in the first and last name fields and click{' '}
            <strong>search</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Instructions;
