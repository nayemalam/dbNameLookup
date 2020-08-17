import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { filterNames } from '../helpers';

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <TableContainer component={Paper} style={{ textAlign: 'center' }}>
          <Table aria-label="search table">
            <TableBody
              className={
                this.props.firstNameSearched === '' &&
                this.props.lastNameSearched === ''
                  ? 'hide'
                  : ''
              }
            >
              {filterNames(
                this.props.users,
                this.props.firstNameSearched,
                this.props.lastNameSearched
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
    );
  }
}

export default SearchResults;
