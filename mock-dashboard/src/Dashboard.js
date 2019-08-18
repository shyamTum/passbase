import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
//const App = () => <Admin dataProvider={dataProvider} />;
const Dashboard = () => (
   <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="users" list={UserList} />
  </Admin>
);
export default Dashboard;
