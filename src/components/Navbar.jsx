import React from 'react'
import './navbar.css'
import img from '../logo.png'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='wrap'>
            <div className='navbar'>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar