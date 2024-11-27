import React, { Component } from 'react'

function MenuItem({image, name, price}){
    return (
      <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}> </div>
        <h1>{name}</h1>
        <p>RM{price}</p>
      </div>
    )
}

export default MenuItem
