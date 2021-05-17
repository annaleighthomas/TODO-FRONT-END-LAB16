import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>TODO LIST</h1>

        <NavLink to="/todolist-tracker">Todo list tracker</NavLink>

      </header>
    );
  }

}

export default Header;