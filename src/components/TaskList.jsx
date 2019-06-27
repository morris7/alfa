import React, { Component } from 'react';
import styled from 'styled-components';

import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/posts`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            result: result,
            isLoaded: true
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const tasks = this.state.result.map(task => {
      return (
        <Task
          id={task.id}
          taskNumber={task.taskNumber}
          taskBody={task.taskBody}
          note={task.note}
          name={task.customer}
          date={task.date}
          key={task.id}
        />
      );
    });

    return (
      <Article>
        <h2>Tasks</h2>
        <hr />
        {tasks}
      </Article>
    );
  }
}

const Article = styled.article`
  padding: 15px;
  margin-bottom: 25px;
  background: #ffffff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.26), 0 7px 14px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2px;
`;

export default TaskList;
