import ContactsListHeader from '../../components/molecules/ContactsListHeader/ContactsListHeader'
import ContactsList from '../../components/molecules/ContactsList/ContactsList'
import Navbar from '../../components/organisms/Navbar/Navbar'
import * as React from "react";
import { connect } from "react-redux";
import { contactsFetched } from "../../actions";

class ContactsListPage extends React.Component {

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.props.contactsFetched(json.results));
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <main className="ui main text container">
          <ContactsListHeader />
          { this.props.contacts ? <ContactsList contacts={this.props.contacts} /> : 'Ładowanie'}
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactsListPage);