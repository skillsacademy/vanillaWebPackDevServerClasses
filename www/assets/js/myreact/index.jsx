import React from 'react';
import { render } from 'react-dom';
import TodoList from './components/someModule/todoList.jsx';



const dummyTodos = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
];

require('../../sass/main.scss');

// essential for hot module replacement! ie, when re-saving jsx file, the webpage doesn't refresh, but the component does update!
if (module.hot){
  module.hot.accept();
}




class App extends React.Component {
  render () {
    return (     
	    <div class="wrapAll">
	    	<header>

	    	</header>
	    	<main>     

	        	<TodoList steve={dummyTodos} />

	        </main>
	        <footer>

	        </footer>  
        </div>        
    );
  }
}

render(<App pagename="first component" />, document.getElementById('app'));

