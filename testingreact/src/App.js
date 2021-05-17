import logo from './logo.svg';
import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import FilteredUsersListPage from './pages/FilteredUsersListPage/FilteredUsersListPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactsListPage from './pages/ContactsListPage/ContactsListPage';


class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/FilteredUsersList" component={FilteredUsersListPage} />
          <Route path="/ContactsList" component={ContactsListPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
