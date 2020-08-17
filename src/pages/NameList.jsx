// external imports
import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
// component imports
import AllNamesTable from '../components/AllNamesTable';

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
            Name List &nbsp;
            <span role="img" aria-label="rocket emoji">
              👍
            </span>
          </h1>
          <h3>This is the current complete list of registered names</h3>
          <AllNamesTable users={this.state.users} />
        </Container>
      </div>
    );
  }
}

export default NameList;
