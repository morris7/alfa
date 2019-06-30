import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Message from '../assets/note.svg';
import Phone from '../assets/phone.svg';
import Button from './Button';
import Panel from './Panel';

class TaskDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:3001/posts/${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            result,
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
    const { error, isLoaded, result } = this.state;

    if (isLoaded && !error) {
      return (
        <Article>
          <Panel>
            <Section className="taskInfo">
              <h2>Task information</h2>
              <hr />
              <p>{result.taskBody}</p>
            </Section>
          </Panel>
          <Panel>
            <Section className="logInfo">
              <h2>Log </h2>
              <hr />
              <ul>
                {result.log.map((log, index) => {
                  const Type = log.type == 'phone' ? Phone : Message;
                  return (
                    <li key={index}>
                      <img src={Type} />
                      <span>{log.content}</span>
                    </li>
                  );
                })}
              </ul>
              <Button text="Add Call" />
              <Button text="Add Note" />
            </Section>
          </Panel>
          <Link to="/">Back</Link>
        </Article>
      );
    } else {
      return null;
    }
  }
}

const Section = styled.section`
  background: #ffffff;
  width: 100%;
  min-height: 200px;
  padding: 15px;
  margin-bottom: 25px;

  li {
    list-style: none;
    padding: 10px 0px;
    img {
      padding-right: 10px;
    }
    &:nth-child(even) {
      background: #f2f2f2;
    }
  }
`;

const Article = styled.article`
  a {
    text-decoration: none;
  }
`;

export default TaskDetail;
