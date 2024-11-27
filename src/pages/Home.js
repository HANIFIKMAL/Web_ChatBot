import React from 'react'
import '../style/Home.css'
import {Link} from "react-router-dom"
import Banner from '../assets/burger.jpg'

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${Banner})`}}>
      <div className='headerContainer' >
        <h1>Anson's Burger Place</h1>
        <p>It's a burger what do you expect?</p>
        <Link to  = "/menu">
        <button>Order Here</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
