import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ActionButtons extends Component {
  render() {
    return (
      <div className="action-btns">
        <Button onClick={this.props.handleSubmit} className="submit-btn">
          Submit
        </Button>
        <Button onClick={this.props.handleSearch} className="search-btn">
          Search
        </Button>
      </div>
    );
  }
}

export default ActionButtons;
