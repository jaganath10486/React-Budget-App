import React from 'react'

function Item(props) {
  return (
    <React.Fragment>
        <li className="list-group-item  list-group-item-action d-flex justify-content-between align-items-center">
            {props.itemName}
            <div>
            <span className="badge bg-primary rounded-pill">{props.itemCost}</span>
            </div>
         
        </li>
    </React.Fragment>
  )
}

export default React.memo(Item);