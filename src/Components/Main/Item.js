import React from 'react'

function Item(props) {
  return (
    <React.Fragment>
        <li className="list-group-item  list-group-item-action d-flex justify-content-between align-items-center">
            {props.itemName}
            <div className='d-lg-flex justify-content-between align-items-center ' >
            <span className="badge bg-primary rounded-pill">{props.itemCost}</span>
            <i className="fa fa-trash-o "></i>
            <i className='fa fa-pencil-square-o '></i>
            </div>
         
        </li>
    </React.Fragment>
  )
}

export default React.memo(Item);