import React from 'react';
import { Link } from 'react-router-dom';

export default function UsersLayoutNavbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand">Navbar</a>
        <Link className="btn btn-outline-success" to="/add">
          Add User
        </Link>
      </div>
    </nav>
  );
}
