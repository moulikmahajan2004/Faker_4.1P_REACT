import React from 'react'
import './navbar.css'

const navbar = () => {
  return (

<div className='divnav'>
<ul className='list'>
<li className='li'><h2 className='head1'>MOULIK@DEAKIN</h2></li>
<li className='li'><input className='Search' type='search' placeholder='🔍Search'></input></li>
<li className='li'> <h4 className='search_button' >POST</h4></li>
<li className='li'> <h4 className='login'>LOGIN</h4></li>
</ul>
</div>


  )
}

export default navbar

