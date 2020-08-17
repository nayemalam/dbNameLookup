// external imports
import React, { Component } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
// external css imports
import 'react-notifications/lib/notifications.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      instructions: false,
      users: [],
      firstNameSearched: '',
      lastNameSearched: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleInstructions = this.toggleInstructions.bind(this);
  }

  handleNameChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const transmitData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: transmitData
    })
      .then(() => {
        console.log('Data sent to the server, success.');
        NotificationManager.success(
          'Data added to the Name List.',
          'Success',
          3000
        );
        this.reset();
      })
      .catch(() => {
        console.log('Error sending data to server.');
      });

    // console.log('submitted info: ', this.state.firstName, this.state.lastName);
  };

  componentDidMount() {
    this.handleSearch();
  }
  handleSearch = () => {
    // event.preventDefault();

    console.log('Component Mounted');

    axios
      .get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({
          users: data
        });
        console.log('Data has been received.');
      })
      .catch(() => {
        console.log('Error retrieving data.');
      });

    this.setState({
      firstNameSearched: this.state.firstName,
      lastNameSearched: this.state.lastName
    });

    this.reset();
  };

  reset = () => {
    this.setState({
      firstName: '',
      lastName: ''
    });
  };

  toggleInstructions = () => {
    this.setState({
      instructions: !this.state.instructions
    });
  };

  render() {
    // console.log('State:', this.state.firstName, this.state.lastName);
    // console.log('Users', this.state.users);

    const filterNames = (array, firstName, lastName) => {
      return array.filter((user) =>
        !user.firstName.toLowerCase().includes(firstName.toLowerCase()) ||
        !user.lastName.toLowerCase().includes(lastName.toLowerCase())
          ? !user
          : user.firstName.toLowerCase().includes(firstName.toLowerCase()) ||
            user.lastName.toLowerCase().includes(lastName.toLowerCase())
      );
    };
    // console.log('Filter: ', filterNames(this.state.users, 'Cha', ''));
    // console.log(this.state.firstNameSearched, this.state.lastNameSearched);
    return (
      <div className="home">
        <Container>
          <h1 style={{ textAlign: 'center' }}>
            Welcome to your Name Finder!{' '}
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>
          </h1>
          <div className="instructions">
            <p onClick={this.toggleInstructions}>
              {this.state.instructions ? 'Hide' : 'View'} Instructons?
            </p>
            <ul
              className={this.state.instructions ? 'instructions-list' : 'hide'}
            >
              <li>Hello</li>
              <li>How</li>
              <li>are</li>
            </ul>
          </div>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField
              className="first-name"
              name="firstName"
              label="First Name"
              type="search"
              value={this.state.firstName}
              onChange={this.handleNameChange}
              margin="normal"
            />

            <TextField
              className="last-name"
              name="lastName"
              label="Last Name"
              type="search"
              value={this.state.lastName}
              onChange={this.handleNameChange}
              margin="normal"
            />
          </form>
          <br />
          <div className="action-btns">
            <Button onClick={this.handleSubmit} className="submit-btn">
              Submit
            </Button>
            <Button onClick={this.handleSearch} className="search-btn">
              Search
            </Button>
          </div>

          <div className="view">
            <div className="search-results">
              <TableContainer component={Paper} style={{ textAlign: 'center' }}>
                <Table aria-label="search table">
                  <TableBody
                    className={
                      this.state.firstNameSearched === '' &&
                      this.state.lastNameSearched === ''
                        ? 'hide'
                        : ''
                    }
                  >
                    {filterNames(
                      this.state.users,
                      this.state.firstNameSearched,
                      this.state.lastNameSearched
                    ).map((user, id) => (
                      <TableRow key={id}>
                        <TableCell component="th" scope="row">
                          {user.firstName}
                        </TableCell>
                        <TableCell>{user.lastName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <div className="feature-image">
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*"
                alt="random"
                width="500px"
                height="300px"
              />
            </div>
          </div>
        </Container>
        <NotificationContainer />
      </div>
    );
  }
}

export default Home;
