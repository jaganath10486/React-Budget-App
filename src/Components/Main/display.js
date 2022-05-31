import React from 'react'
import '../Styles/display.css';

function Display(props) 
{
  return (
    <React.Fragment>
        <div className={`alert alert-${props.className}`}>
			     <span className='text'>{props.children}</span>
           <div className='displayMoney'>${props.money}</div>
		    </div>
    </React.Fragment>
  )
}

export default React.memo(Display)