import React from 'react';
import UsersList from '../../molecules/UserList/Userlist'

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class FilteredUsersList extends React.Component {
    constructor() {
        super();    
        
        this.state = {
          filteredUsers: allUsers
        };
      }
    
      filterUsers = (e) => {
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text)
        this.setState({
          filteredUsers
        })
      }
      
      getFilteredUsersForText = (text) => {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
      }
    
      render() {
        return (
          <div>
            <input onChange={this.filterUsers}/>
            <UsersList users={this.state.filteredUsers}/>
          </div>
        );
      }
}
export default FilteredUsersList;