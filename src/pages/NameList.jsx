import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class NameList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }
  render() {
    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9)
    ];
    console.log(this.state.users);
    return (
      <div className="namelist">
        <Container>
          <h1>NameList</h1>
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
                      {user.id}
                    </TableCell>
                    <TableCell>{user.username}</TableCell>
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
