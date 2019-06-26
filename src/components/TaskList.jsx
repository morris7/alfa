import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <Task
          id="123"
          note="Lorem ipsum"
          name="James Bond"
          date="01.01.2019 12:00"
        />
      </article>
    );
  }
}

export default TaskList;
