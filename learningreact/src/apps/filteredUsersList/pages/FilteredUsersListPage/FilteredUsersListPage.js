import React from 'react';
import FilteredUsersList from '../../components/FilteredUsersList/FilteredUsersList';
import './FilteredUsersListPage.css'

function FilteredUsersListPage() {
    return(
        <div className="app-center">
            <div className="glass-box">
                <FilteredUsersList></FilteredUsersList>
            </div>
        </div>
        //
    )
}
export default FilteredUsersListPage;