import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';

export default class Navigation extends Component {
  render () {
    return (
      <ul className='nav'>
        <li>
          <NavLink exact activeClassName='active' to='/github-rating'>Rating</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/github-rating/new'>Add new language</NavLink>
        </li>
      </ul>
    );
  }
}