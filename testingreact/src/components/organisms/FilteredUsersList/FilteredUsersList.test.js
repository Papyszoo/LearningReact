import { render, screen, wait } from '@testing-library/react';
import FilteredUsersList from '/FilteredUsersList';
import { shallow } from 'enzyme';
import UsersList from '../../molecules/UserList/Userlist'
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
it('renders without crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<FilteredUsersList />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes UsersList', () => {
  const app = shallow(<FilteredUsersList />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});

it('passing params', () => {
  const app = shallow(<FilteredUsersList />);
  expect(app.find('UsersList').prop('users')).toEqual(allUsers)
}); 