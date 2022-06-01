import React, {useContext, useState} from 'react'
import Items from './Items';
import { AppContext } from '../../Context/ContextApi';


function Search() {
    const { items } = useContext(AppContext);
    const [text, setText]= useState('');
    
    const dynamicSearch = () => {
        return items.filter(item => item.itemName.toLowerCase().includes(text.toLowerCase()))
    }
  return (
    <div style={{paddingTop : '10px'}}>
            <h1 className="text-start" style={{paddingBottom : '20px'}}>Expenses </h1>
        <form className='row'>
           <div className="col">
             <input type="text" 
               className="form-control"
               id="SearchInput" 
               value={text}
               onChange = {(event) => {setText(event.target.value)}}  
               placeholder="Type to Search" />
            </div>
        </form>
        <Items ResultedItems = {dynamicSearch()}/>
    </div>
  )
}

export default Search