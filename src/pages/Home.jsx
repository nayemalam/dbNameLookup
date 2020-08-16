import React, { Component } from 'react';
import {
  Container,
  TextField,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button
} from '@material-ui/core';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      helperText: '',
      displayFirst: '',
      displayLast: ''
    };

    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    });
  };

  getLastName = (event) => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      displayFirst: this.state.firstName,
      displayLast: this.state.lastName,
      firstName: '',
      lastName: ''
    });
    console.log('submitted info: ', this.state.firstName, this.state.lastName);
  };

  handleSearch = (event) => {
    event.preventDefault();
    console.log('searching for', this.state.firstName, this.state.lastName);
  };

  render() {
    return (
      <div className="home">
        <Container>
          <h1>Home Page</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              id="first-name"
              label="First Name"
              type="search"
              value={this.state.firstName}
              onChange={this.getFirstName}
              margin="normal"
            />
            <br />
            <TextField
              id="last-name"
              label="Last Name"
              type="search"
              value={this.state.lastName}
              onChange={this.getLastName}
              margin="normal"
            />
          </form>
          <br />
          <div>
            <Button onClick={this.handleSubmit}>Submit</Button>
            <Button onClick={this.handleSearch}>Search</Button>
          </div>

          <div className="view">
            <div className="search-results">
              <ul>
                <li>{this.state.displayFirst}</li>
                <li>{this.state.displayLast}</li>
              </ul>
            </div>

            <div className="feature-image">
              <h1>
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
                  alt="random"
                />
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
