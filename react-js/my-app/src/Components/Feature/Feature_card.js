import React from "react"
import { Menu } from "../Feature/Menu"

const Feature_Card = () => {
  return (
    <>
      <div className='grid5' style={{marginTop:'2rem'}}>
        {Menu.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4 className="lab-h4">{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default Feature_Card