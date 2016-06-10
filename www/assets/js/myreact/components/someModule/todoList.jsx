import React from 'react';

import Todo from '../someModule/todo.jsx';


export default class TodoList extends React.Component { 
  render () {    
    return  <div className='todo'>
      <input type='text' placeholder='Add todo' />

      <ul className='todoList'>

        {this.props.steve.map(k => (
          <li key={k.id} className='todoItem'>
            <Todo todo={k} />
          </li>
        ))}

      </ul>
    </div>
  }
}