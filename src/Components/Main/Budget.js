import React from 'react'

function Budget() {
  return (
    <div className='container d-flex justify-content-center'>
        <form>
            <div className='row g-2'>
            <div class="col-auto">
               <input type="text" class="form-control" id="inputBudget" placeholder="Enter the Budget Amount" />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Budget