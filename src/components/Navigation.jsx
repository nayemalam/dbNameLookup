import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <ul>
          <li>
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="navlink" to="about">
              About
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/names">
              Name List
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
