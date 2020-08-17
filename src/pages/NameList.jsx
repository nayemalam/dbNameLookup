import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

class NameList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getAllNames();
  }

  getAllNames = () => {
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
  };

  render() {
    console.log(this.state.users);
    return (
      <div className="namelist">
        <Container>
          <h1>
            Name List
            <span role="img" aria-label="rocket emoji">
              👍
            </span>
          </h1>
          <h3>This is the current complete list of registered names</h3>

          <TableContainer component={Paper} style={{ textAlign: 'center' }}>
            <Table aria-label="simple table">
              <TableHead className="table-header">
                <TableRow>
                  <TableCell className="title">First Name</TableCell>
                  <TableCell className="title">Last Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map((user, id) => (
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
        </Container>
      </div>
    );
  }
}

export default NameList;
