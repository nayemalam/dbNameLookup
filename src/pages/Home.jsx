// external imports
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
// external css imports
import 'react-notifications/lib/notifications.css';
// component imports
import Instructions from '../components/Instructions';
import NameForm from '../components/NameForm';
import ActionButtons from '../components/ActionButtons';
import RenderView from '../components/renderview/RenderView';

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
          <Instructions
            toggleInstructions={this.toggleInstructions}
            instructions={this.state.instructions}
          />
          <NameForm
            handleSubmit={this.handleSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            handleNameChange={this.handleNameChange}
          />
          <br />
          <ActionButtons
            handleSubmit={this.handleSubmit}
            handleSearch={this.handleSearch}
          />

          <RenderView
            firstNameSearched={this.state.firstNameSearched}
            lastNameSearched={this.state.lastNameSearched}
            users={this.state.users}
          />
        </Container>
        <NotificationContainer />
      </div>
    );
  }
}

export default Home;
