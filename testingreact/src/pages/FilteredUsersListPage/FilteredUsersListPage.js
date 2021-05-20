import React from 'react';
import FilteredUsersList from '../../components/organisms/FilteredUsersList/FilteredUsersList';
import Navbar from '../../components/organisms/Navbar/Navbar';

function FilteredUsersListPage() {
    return(
        <div>
            <Navbar></Navbar>
            <main className="ui main text container">
                <FilteredUsersList></FilteredUsersList>
            </main>
        </div>
    )
}
export default FilteredUsersListPage;