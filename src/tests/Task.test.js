import React from 'react';
import Task from '../components/Task';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('when rendering a Task component', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = shallow(<Task {...props} />);
  });

  describe('without props', () => {
    beforeAll(() => (props = {}));

    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('with props', () => {
    beforeAll(() => {
      props = {
        taskNumber: 1,
        taskBody: 'test body',
        note: 'test note',
        customer: 'batman',
        date: '01.01.2001',
        id: '123'
      };
    });

    it('should match snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
