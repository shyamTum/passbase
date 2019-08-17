import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { Dashboard } from './Dashboard';
import authProvider from './authProvider';
import CustomLoginPage from './LoginPage';

import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
   <Admin dataProvider={dataProvider} authProvider={authProvider} LoginPage = {CustomLoginPage}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={UserList} />
  </Admin>
);
export default App;
