import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AllNamesTable extends Component {
  render() {
    return (
      <TableContainer component={Paper} style={{ textAlign: 'center' }}>
        <Table aria-label="simple table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell className="title">First Name</TableCell>
              <TableCell className="title">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.users.map((user, id) => (
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
    );
  }
}

export default AllNamesTable;
