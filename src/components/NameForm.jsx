import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class NameForm extends Component {
  render() {
    return (
      <form autoComplete="off" onSubmit={this.props.handleSubmit}>
        <TextField
          className="first-name"
          name="firstName"
          label="First Name"
          type="search"
          value={this.props.firstName}
          onChange={this.props.handleNameChange}
          margin="normal"
        />

        <TextField
          className="last-name"
          name="lastName"
          label="Last Name"
          type="search"
          value={this.props.lastName}
          onChange={this.props.handleNameChange}
          margin="normal"
        />
      </form>
    );
  }
}

export default NameForm;
