import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Task = props => {
  const { taskNumber, taskBody, note, name, date, id } = props;

  return (
    <Section id={id}>
      <table>
        <tbody>
          <tr>
            <td>{taskNumber}</td>
            <td>{note}</td>
            <td>{name}</td>
            <td>{date}</td>
          </tr>
          <tr className="taskInfo">
            <td colSpan="4">{taskBody}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to={`/Task/${id}`}>View Task</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
};

const Section = styled.section`
  padding: 15px;
  margin-bottom: 25px;
  background: ${props => (props.id % 2 ? '#fff' : '#f2f2f2')};
  table {
    width: 100%;
    tr {
      text-align: center;
      &:last-of-type {
        td:last-of-type {
          text-align: right;
        }
      }
      &:nth-child(2) {
        text-align: left;
        font-style: italic;
      }
    }
  }
`;

export default Task;
