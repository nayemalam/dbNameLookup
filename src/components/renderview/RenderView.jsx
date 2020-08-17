import React, { Component } from 'react';
import SearchResults from './SearchResults';
import FeatureImage from './FeatureImage';

class RenderView extends Component {
  render() {
    return (
      <div className="renderview">
        <SearchResults
          firstNameSearched={this.props.firstNameSearched}
          lastNameSearched={this.props.lastNameSearched}
          users={this.props.users}
        />
        <FeatureImage />
      </div>
    );
  }
}

export default RenderView;
