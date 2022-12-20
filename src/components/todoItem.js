import React from 'react';

export const TodoItem = ({ todos, onDelete }) => {
  console.log(todos);
  return (
    <div>
      <br />
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button
        type="submit"
        className="btn btn-sm btn-danger"
        onClick={()=>{onDelete(todos)}}
      >
        delete
      </button>
    </div>
  );
};
