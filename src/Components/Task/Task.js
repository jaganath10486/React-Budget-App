import React from 'react'
import Display from '../Main/display'

function Task() 
{
  return (
    <React.Fragment>
      <div className='row mt-3'>
					<div className='col-sm'>
						<Display className = 'info' money = '2000'>
               Budget
            </Display>
					</div>
					<div className='col-sm'>
						<Display className = 'danger' money = '2000'>
               Remaining
            </Display>
					</div>
					<div className='col-sm'>
						<Display className = 'success' money = '2000'>
               Spent
            </Display>
					</div>
				</div>
    </React.Fragment>
  )
}

export default Task