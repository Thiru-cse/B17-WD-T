import React, { useCallback, useMemo, useState } from 'react'

function Callback() {
    const [count, setCount] = useState(0);
    const [searchItem, setSearchItem] = useState('')
    const [items, setItems] = useState(["Electronics", "Fancy", "Toys", "Kids", "Mens", "Groceries"])

    
    const filterItems = useMemo(()=>{
        console.log("Filter");

        return items.filter(item => item.toLowerCase()
        .includes(searchItem.toLowerCase()));    
    },[items, searchItem]); 

    const handleChange=useCallback((e)=>{
        setSearchItem(e.target.value)
        console.log("Search Items");
    },[])


  return (
    <div>
        <input type="text" 
        name='searchitems' 
        value={searchItem} 
        onChange={handleChange} 
        placeholder='Search' />

        <ul>
        {filterItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
        </ul>

        <button onClick={()=>{setCount(val=>val+1)}}>Count - {count}</button>
    </div>
  )
}

export default Callback