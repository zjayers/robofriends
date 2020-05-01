import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import App from '../containers/App'
import Card from './Card';
import CardList from './CardList';
import CounterButton from './CounterButton';
import ErrorBoundary from './ErrorBoundry';
import Header from './Header';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

it('expect functional components to match snapshots', () => {
  expect(toJson(shallow(<Card />))).toMatchSnapshot();

  const mockRobots = [
    {
      id: 1,
      name: 'Rob',
      userName: 'Rob',
      email: 'Rob@rob.com'
    }
  ]

  expect(toJson(shallow(<CardList robots={mockRobots} />))).toMatchSnapshot();
})

it('expect class based components to match snapshots', () => {

  const mockColor = 'red';
  expect(toJson(shallow(<CounterButton color={mockColor} />))).toMatchSnapshot();

})

it ('class button correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor} />)

  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 2});

})
