import React, { useContext } from 'react'
import { AppContext } from '../../Context/ContextApi';

function Item(props) {
  const {dispatch}= useContext(AppContext);

  const deleteItem = () => {
    console.log(props.id + 'This ');
    dispatch({
      type : 'DELETE ITEM',
      value : props.id
    })
  }

  return (
    
        <li className="list-group-item  list-group-item-action d-flex justify-content-between align-items-center" style={{cursor : 'pointer'}}>
           {props.itemName}
            <div className='d-lg-flex justify-content-between align-items-center ' >
              <span className="badge bg-primary rounded-pill">{props.itemCost}</span>
                <i className="fa fa-trash-o" onClick={deleteItem}></i>  
                <i className='fa fa-pencil-square-o '></i>
            </div>
         
        </li>
    
  )
}

export default React.memo(Item);