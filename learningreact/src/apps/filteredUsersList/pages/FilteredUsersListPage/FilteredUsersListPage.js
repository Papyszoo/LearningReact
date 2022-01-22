import React from 'react';
import FilteredUsersList from '../../components/FilteredUsersList/FilteredUsersList';

function FilteredUsersListPage() {
    return(
        <div>
            <main className="ui main text container">
                <FilteredUsersList></FilteredUsersList>
            </main>
        </div>
    )
}
export default FilteredUsersListPage;