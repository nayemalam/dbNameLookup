import React, { Component } from 'react';
import { Container } from '@material-ui/core';
class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <Container>
          <h1>Oops.</h1>
        </Container>
      </div>
    );
  }
}

export default NotFound;
