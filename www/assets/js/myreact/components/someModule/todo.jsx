import React from 'react';

export default class Todo extends React.Component { 
  render () {    
    return  <div>
    	{this.props.todo.isDone ? <strike>{this.props.todo.text}</strike>: <span>{this.props.todo.text}</span>}
    </div>
  }
}