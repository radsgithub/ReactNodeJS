import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [Description, setDescription] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!title || !Description) {
      alert('Title or Description cannot empty');
    } else {
      addTodo(title, Description);
    }
    setTitle('');
    setDescription('');
  };
  return (
    <div className="container py-5">
      <h3> Add the Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={Description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="form-control"
            id="Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
