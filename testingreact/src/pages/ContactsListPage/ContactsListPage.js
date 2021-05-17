import ContactsListHeader from '../../components/molecules/ContactsListHeader/ContactsListHeader'
import ContactsList from '../../components/molecules/ContactsList/ContactsList'
import Navbar from '../../components/organisms/Navbar/Navbar'
function ContactsListPage() {
    return (
      <div>
        <Navbar></Navbar>
        <ContactsListHeader />
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
  export default ContactsListPage;