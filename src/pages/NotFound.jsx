import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <Container>
          <h2>Uh oh ... looks like you've hit a dead end.</h2>

          <div className="eyes">
            <span role="img" aria-label="eye emoji">
              👀
            </span>
          </div>

          <h1>404</h1>
          <p>Lucky for you, here are some pages you can check out.</p>
          <div>
            <Link to="/" className="redirect-home">
              Home
            </Link>
            <Link to="/names" className="redirect-names">
              Name List
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default NotFound;
