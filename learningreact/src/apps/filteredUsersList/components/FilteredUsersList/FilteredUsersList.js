import React from 'react';
import SearchInput from '../SearchInput';
import UsersList from '../UserList/Userlist'

const allUsers = ['Michał', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

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
          <div className="">
            <div className="p-4 border-b border-stone-500 border-opacity-50">
              <SearchInput onChange={this.filterUsers}/>
            </div>
            <UsersList users={this.state.filteredUsers}/>
          </div>
        );
      }
}
export default FilteredUsersList;