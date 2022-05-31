import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/reset.css';
import './Styles/App.css';
import Task from './Task/Task';
import 'font-awesome/css/font-awesome.min.css';

import React, {useReducer} from 'react';

import {Appprovider} from './Context/ContextApi';
import Items from './Components/Main/Items';
import AddItem from './Components/Main/AddItem';

const reducerFunction = (state, action) =>{
  let items;
  switch(action.type)
  {
    case 'ADD ITEM': 
      return {
        ...state, items : [...state.items, action.value]
      }
    case 'DELETE ITEM':
      return {
				...state,
				items: state.items.filter(
					(expense) => expense.id !== action.value
				),
			};

      case 'EDIT BUDGET':
        return {
          ...state, budget : action.value
        }
      default:
        return state
  }

}


function App() {
 
  const initialState = {
    budget : 2000,
    items : [
    ]

  };
    
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
            <Appprovider value={{items : state.items,  budget : state.budget, dispatch}} >
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
