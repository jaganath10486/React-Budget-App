import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/reset.css';
import './Styles/App.css';
import Task from './Task/Task';

import React, {useReducer} from 'react';

import {Appprovider} from './Context/ContextApi';
import Items from './Components/Main/Items';
import AddItem from './Components/Main/AddItem';



const reducerFunction2 = (state, action) => {
  switch(action)
  {
    case 'INCREMENT':
      return state + 1;
    default:
      return state
  }
}


function App() {
 
  const initialState = {
    budget : 2000,
    items : [
        {id : 1, itemName : 'Banana', itemCost : 30},
        {id : 2, itemName : 'Apple', itemCost : 100},
        {id : 3, itemName : 'Orange', itemCost : 40},
    ]

  };

  const [id, dispatch1]= useReducer(reducerFunction2, 3);

  const reducerFunction = (state, action) =>{
    let newItem;
    switch(action.type)
    {
      case 'ADD ITEM':
        newItem = {...action.value, id} 
        return {
          ...state, items : [...state.items, newItem]
        }
      case 'DELETE ITEM':
        return {
          ...state, items : [action.value]
        }
        case 'EDIT BUDGET':
          return {
            ...state, budget : action.value
          }
        default:
          return state
    }
  
  }
    
  const [state, dispatch] = useReducer(reducerFunction, initialState);


  return (
    <div className="App">
      <div className='container'>
         <div className='front'>

         </div>
         <div className='main'>
            <header className="App-header">
              <h1 className ="text-xl-center text-capitalize">Budget App</h1>
            </header>
            <Appprovider value={{items : state.items, newId : id, budget : state.budget, dispatch, dispatch1}} >
              <Task/>
              <Items/>
              <AddItem/>  
            </Appprovider>
                        
         </div>
      </div>
    </div>
  );
}

export default App;
