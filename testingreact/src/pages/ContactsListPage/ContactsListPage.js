import ContactsListHeader from '../../components/molecules/ContactsListHeader/ContactsListHeader'
import ContactsList from '../../components/molecules/ContactsList/ContactsList'
import Navbar from '../../components/organisms/Navbar/Navbar'
import * as React from "react";
import { connect } from "react-redux";
import { contactsFetched } from "./actions";
export class ContactsListPage extends React.Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main className="ui main text container">
          <ContactsListHeader />
          { this.state.contacts ? <ContactsList contacts={this.state.contacts} /> : 'Ładowanie'}
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts // (1)
  }
};
const mapDispatchToProps = { contactsFetched };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(ContactsListPage);