import React, { Component } from 'react';

class TaskDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      result: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:3001/posts/${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            result: result,
            isLoaded: true,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    return (
      <article class="taskDetail">
        <section className="taskInfo">
          <h2>Task information</h2>
          <hr />
          <p>{this.state.result.taskBody}</p>
        </section>

        <section className="logInfo">
          <h2>Log</h2>
          <hr />
          <p>{this.state.result.taskBody}</p>
        </section>
      </article>
    );
  }
}

export default TaskDetail;
