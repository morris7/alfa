import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import { MemoryRouter } from 'react-router';

import TaskDetail from '../components/TaskDetail';
import { createMockFetchSuccess, createMockFetchFailure } from './testUtils';

const FETCH_URL = 'http://localhost:3001/posts/1';
const mockRouter = {
  match: {
    params: { id: 1 }
  }
};
const taskDetail = {
  id: '1',
  taskNumber: '38263',
  date: '19/09/2017 13:41',
  customer: 'Freida Bentley',
  taskBody: 'Task body',
  note: 'Useful note',
  log: [
    {
      type: 'phone',
      content: 'content'
    }
  ]
};
const successResponse = {
  result: { ...taskDetail },
  isLoaded: true
};
const failResponse = { isLoaded: true, error: true };

let props;

describe('when rendering a TaskDetail component', () => {
  let wrapper;

  beforeEach(() => {
    const allProps = { ...props, ...mockRouter };

    wrapper = mount(
      <MemoryRouter>
        <TaskDetail {...allProps} />
      </MemoryRouter>
    );
  });

  describe('when the fetch fails', () => {
    beforeAll(() => {
      jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => createMockFetchFailure(true));
    });

    afterAll(() => global.fetch.mockClear());

    it('fetches data from server and sets error state', done => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(FETCH_URL);

      process.nextTick(() => {
        expect(wrapper.find(TaskDetail).state()).toEqual(failResponse);

        done();
      });
    });

    it('does not render', () => {
      expect(wrapper.contains(<TaskDetail />)).toBe(false);
    });
  });

  describe('when the fetch succeeds', () => {
    beforeAll(() => {
      jest
        .spyOn(global, 'fetch')
        .mockImplementation(() => createMockFetchSuccess(taskDetail));
    });

    beforeEach(() => wrapper.update());

    afterAll(() => global.fetch.mockClear());

    it('fetches data from server and sets correct state', done => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(FETCH_URL);

      process.nextTick(() => {
        expect(wrapper.find(TaskDetail).state()).toEqual(successResponse);
        done();
      });
    });

    it('matches snapshot', () => {
      expect(toJson(wrapper.find(TaskDetail))).toMatchSnapshot();
    });
  });
});
