import logo from './logo.svg';
import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import FilteredUsersListPage from './pages/FilteredUsersListPage/FilteredUsersListPage'
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import ContactsListPage from './pages/ContactsListPage/ContactsListPage';
import JokeGeneratorPage from './pages/JokeGeneratorPage/JokeGeneratorPage';
import CaptureValuesFormPage from './pages/CaptureValuesFormPage/CaptureValuesFormPage';


class App extends React.Component {
  render() {
    return (
      <main>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/FilteredUsersList" component={FilteredUsersListPage} />
            <Route path="/ContactsList" component={ContactsListPage} />
            <Route path="/JokeGenerator" component={JokeGeneratorPage} />
            <Route path="/CaptureValuesForm" component={CaptureValuesFormPage} />
          </Switch>
        </Router>
      </main>
    );
  }
}

export default App;
