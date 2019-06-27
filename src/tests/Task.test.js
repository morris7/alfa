import React from 'react';
import ReactDOM from 'react-dom';
import Task from '../components/Task';
import { shallow } from 'enzyme';

describe('when rendering the App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Task />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should should match snapshot', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper).toMatchSnapshot();
  });
});
