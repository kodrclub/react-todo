import React, { useState, useEffect } from 'react';

export default function Foo() {
  let [tasks, setTasks] = useState([]);

  const addOne = () => {
    const newAttrs = {
      text: 'Item ' + Math.random().toString().substr(-6),
      isDone: false,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(newAttrs),
    };

    fetch('/api/tasks', options)
      .then((res) => res.json())
      .then((json) => {
        setTasks((tasks) => [...tasks, json.task]);
      });
  };

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((json) => {
        setTasks(json.tasks);
      });
  }, []);

  return (
    <ul>
      <button
        onClick={addOne}
        style={{ padding: '1em', background: 'orange', margin: '1em' }}
      >
        Add
      </button>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}
