import React from 'react'

const Item = (props) => {
  return (
    <div >
        <div>
            <h1>HIi</h1>{props.name}
        </div>
        <div>
            <img src={props.image} alt="" />
        </div>
        <div>
            {props.new_price}
        </div>
        <div>
            {props.old_price}
        </div>
    </div>
  )
}

export default Item