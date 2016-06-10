
import { List, Map } from 'immutable';

const init = List([]);

export default function(todos, action) {
  switch(action.type) {
    case 'ADD_TODO':

      // ... building a history of actions....      
      return todos.push(Map(action.payload));

    case 'TOGGLE_TODO':
    
      // ...
	  return todos.map(t => {
	    if(t.get('id') === action.payload) {
	      return t.update('isDone', isDone => !isDone);
	    } else {
	      return t;
	    }
	  });   
	     
    default:
      return todos || init;
  }
}