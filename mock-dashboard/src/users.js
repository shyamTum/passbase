import React from 'react';
import { List, Datagrid, TextField, EmailField} from 'react-admin';

class UserList extends React.Component {
  render() {
     const props = this.props;
     return (
         <List {...props}>
             <Datagrid rowClick="edit">
                  <TextField source="id" label="#"/>
                  <TextField source="Time" />
                  <TextField source="First Name" />
                  <TextField source="Last Name" />
                  <EmailField source="email" />
                  <TextField source="Location" />
                  <TextField source="Authentication Document" />
                  <TextField source="Score" />

                  <TextField source="Status" style={{color:'#a5abe8'}} onClick={this.handleClick}/>
            </Datagrid>
         </List>
       );
}}

export default UserList;
