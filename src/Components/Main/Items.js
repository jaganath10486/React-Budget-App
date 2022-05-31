import React, {useContext} from 'react';
import { AppContext } from '../../Context/ContextApi';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

function Items() {
   const { items } = useContext(AppContext);

  return (
    <div className='container'>
        <ul className="list-group">
           {items.map((item) => (
				<Item  key = {item.id}  id = {item.id} itemName={item.itemName} itemCost={item.itemCost} />
			))}
        </ul>
    </div>
  )
}

export default React.memo(Items)