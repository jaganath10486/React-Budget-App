import React, {useContext} from 'react';
import { AppContext } from '../../Context/ContextApi';
import Item from './Item';

function Items() {
   const { items } = useContext(AppContext);

  return (
    <div className='container' style={{paddingTop : '30px'}}>
       <h1 className="text-start" style={{paddingBottom : '20px'}}>Expenses </h1>
        <ul className="list-group">
           {items.map((item) => (
				<Item  key = {item.id}  id = {item.id} itemName={item.itemName} itemCost={item.itemCost} />
			))}
        </ul>
    </div>
  )
}

export default React.memo(Items)