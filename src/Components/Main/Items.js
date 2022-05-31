import React, {useContext} from 'react';
import App from '../../App';
import { AppContext } from '../../Context/ContextApi';
import Item from './Item';

function Items() {
   const { items } = useContext(AppContext);

  return (
    <div className='container'>
        <ul className="list-group">
           {items.map((item) => (
				<Item  key ={item.id} itemName={item.itemName} itemCost={item.itemCost} />
			))}
        </ul>
    </div>
  )
}

export default React.memo(Items)