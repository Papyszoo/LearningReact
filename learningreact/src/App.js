import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage'
import FilteredUsersListPage from './apps/filteredUsersList/pages/FilteredUsersListPage/FilteredUsersListPage'
import { Route, Switch } from 'react-router-dom';
import ContactsListPage from './apps/contactsList/pages/ContactsListPage/ContactsListPage';
import JokeGeneratorPage from './apps/jokeGenerator/pages/JokeGeneratorPage/JokeGeneratorPage';
import CaptureValuesFormPage from './apps/captureValuesForm/pages/CaptureValuesFormPage/CaptureValuesFormPage';
import { Provider } from "react-redux";
import { store } from './store';
import './App.css'


class App extends React.Component {
  render() {
    return (
      <main className="page-background">
        <div className="sidebar-flex">
          <Navbar />
          <Provider store={store}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/FilteredUsersList" component={FilteredUsersListPage} />
              <Route path="/ContactsList" component={ContactsListPage} />
              <Route path="/JokeGenerator" component={JokeGeneratorPage} />
              <Route path="/CaptureValuesForm" component={CaptureValuesFormPage} />
            </Switch>
          </Provider>
        </div>
      </main>
    );
  }
}

export default App;
