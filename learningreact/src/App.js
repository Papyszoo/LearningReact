import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage'
import FilteredUsersListPage from './apps/filteredUsersList/pages/FilteredUsersListPage/FilteredUsersListPage'
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import ContactsListPage from './apps/contactsList/pages/ContactsListPage/ContactsListPage';
import JokeGeneratorPage from './apps/jokeGenerator/pages/JokeGeneratorPage/JokeGeneratorPage';
import CaptureValuesFormPage from './apps/captureValuesForm/pages/CaptureValuesFormPage/CaptureValuesFormPage';
import { Provider } from "react-redux";
import { store } from './store';


class App extends React.Component {
  render() {
    return (
      <main className="bg-gradient-to-b from-cyan-800 to-blue-600 h-screen">
        <div className="flex flex-row">
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
