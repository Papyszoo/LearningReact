import React from 'react';
import FilteredUsersList from '../../components/organisms/FilteredUsersList/FilteredUsersList';
import Navbar from '../../components/organisms/Navbar/Navbar';

function FilteredUsersListPage() {
    return(
        <div>
            <Navbar></Navbar>
            <FilteredUsersList></FilteredUsersList>
        </div>
    )
}
export default FilteredUsersListPage;