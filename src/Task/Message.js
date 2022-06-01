import React, { useContext} from 'react'
import { AppContext } from '../Context/ContextApi';
import DisplayMessage from '../Components/Main/DisplayMessage';

function Message() {


    let display = false;
    const {budget, items} = useContext(AppContext);

    let Spent = items.reduce((total, item) => {
        return (total + item.itemCost)
    },0)


    const handleDisplay = () => {
        display = false;
        console.log('Clicked');
    }

  return (
    <div className='container'>
        {
            ( (budget-Spent) < 20  && (budget-Spent) >= 0 && (<DisplayMessage message = {'The Budget Amount is less than 20 rupees'} classname = {'warning'} handleDisplay = {handleDisplay}/>) )
        }
        {
            (budget-Spent < 0) ? (<DisplayMessage message = {'The Budget Amount is less than 0 rupees'} classname = {'danger'} handleDisplay = {handleDisplay}/>) : (<div></div>) 
        }

    </div>
  )
}

export default React.memo(Message);