import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './users';
import authProvider from './authProvider';
import CustomLoginPage from './LoginPage';

const dataProvider = jsonServerProvider('http://localhost:3000');
const App = () => (
   <Admin dataProvider={dataProvider} authProvider={authProvider} LoginPage = {CustomLoginPage}>
        <Resource name="users" list={UserList} />
  </Admin>
);
export default App;
