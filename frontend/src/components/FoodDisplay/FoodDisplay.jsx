import React, { useContext, useState } from 'react'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes hear you</h2>
        <div className="foodplay-list">
            {food_list.map((item,index)=>{
                return
            })}
        </div>

    </div>
  )
}

export default FoodDisplay