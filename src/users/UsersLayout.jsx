import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import UsersLayoutNavbar from './UserLayoutNavbar';
import UserForm from './UserForm';

export default function UsersLayout() {
  return (
    <BrowserRouter>
      <UsersLayoutNavbar />

      <UserForm />
    </BrowserRouter>
  );
}
