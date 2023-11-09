import React from "react";

export const Zadania = (props) => {
  const { tabTodo } = props;
  return (
    <article>
      <h3>Zadania</h3>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Priorytet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tabTodo.map((zad) => (
            <tr key={zad.id}>
              <td>{zad.todo}</td>
              <td>{zad.priority}</td>
              <td>
                <button>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
