import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/reset.css';
import './Styles/App.css';
import Task from './Components/Task/Task';

import React, {useReducer} from 'react';

import {Appprovider} from './Context/ContextApi';

function App() {

  const initialState = {
    budget : 2000,
    items : [
        {id : 1, itemName : 'Banana', itemCost : 30},
        {id : 2, itemName : 'Apple', itemCost : 100},
        {id : 3, itemName : 'Orange', itemCost : 40},
    ]

  };
    
  //const [state, setState] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <div className='container'>
         <div className='front'>

         </div>
         <div className='main'>
            <header className="App-header">
              <h1 className ="text-xl-center text-capitalize">Budget App</h1>
            </header>
            <Task/>   
         </div>
      </div>
    </div>
  );
}

export default App;
