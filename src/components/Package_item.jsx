import React from 'react'
import all_packages from '../assets/all_packages.js'
import Item from './Item.jsx';

const Package_item = () => {
  console.log(all_packages);
  return (
    <div>
      <h1>Hii</h1>
        <div>
          {all_packages.map((item, i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}

export default Package_item
