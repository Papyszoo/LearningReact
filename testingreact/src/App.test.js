import { render, screen, wait } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import UsersList from './Userlist'
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];
it('renders without crashing', () => {
  shallow(<App />);
});

it('includes input', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true)
});

it('includes UsersList', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true)
});

it('passing params', () => {
  const app = shallow(<App />);
  expect(app.find('UsersList').prop('users')).toEqual(allUsers)
}); 