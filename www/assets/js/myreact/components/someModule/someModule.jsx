import React from 'react';
import {render} from 'react-dom';


require('../../../../sass/someModule/_someModule.scss');


export default class SomeModule extends React.Component {
  render () {
    return <div className="someModule">    	                   
          		Hello From 'SomeModule'            
        </div>
  }
}