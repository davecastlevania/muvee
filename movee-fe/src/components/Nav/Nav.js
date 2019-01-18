import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/search">Muvee</Link>
        </div>
        <ul className="nav navbar-nav">
  
          <li>
            <Link to="/search">Search Titles</Link>
          </li>

        </ul>
      </nav>
    );
  }
}
export default Nav;
