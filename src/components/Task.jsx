import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const styles = {};

const Task = props => {
  const { id, note, name, date } = props;
  return (
    <section>
      <table style={styles}>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{note}</td>
            <td>{name}</td>
            <td>{date}</td>
          </tr>
          <tr className="taskInfo">
            <td colSpan="4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Link to="/task">View Task</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Task;
