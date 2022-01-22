import React from 'react';
import FilteredUsersList from '../../components/FilteredUsersList/FilteredUsersList';

function FilteredUsersListPage() {
    return(
        <div className="mx-auto my-80">
            <div className="bg-blue-900 border border-stone-500 border-opacity-50 rounded-xl bg-opacity-70 backdrop-blur-lg backdrop-saturate-150">
                <FilteredUsersList></FilteredUsersList>
            </div>
        </div>
    )
}
export default FilteredUsersListPage;