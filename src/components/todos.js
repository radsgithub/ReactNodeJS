import React from 'react';
import { TodoItem } from './todoItem';

export const Todos = (props) => {
  return (

      <div className="container">
        <h1 className='text-center my-3'>Todo list</h1>
        <br />
        <p className='text-left  my3'>
        {props.todos.length===0 ?"Nothing to display!!!":props.todos.map((i) => {
          return <TodoItem todos={i}  key={i.sno} onDelete={props.onDelete} />;
        })}

        </p>

      </div>

  );
};
