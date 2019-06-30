import React, { Component } from 'react';
import styled from 'styled-components';

import Task from './Task';
import Panel from './Panel';

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
      return <Task {...task} key={task.id} />;
    });

    return (
      <Panel>
        <Article>
          <h2>Tasks</h2>
          <hr />
          {tasks}
        </Article>
      </Panel>
    );
  }
}

const Article = styled.article`
  padding: 15px;
  background: #ffffff;
`;

export default TaskList;
