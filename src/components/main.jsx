import React from 'react'
import './main.css'
import image from "./main.jpg"
const Mainimage = () => 
{
    return (
        <>
       <img src={image} className='image' alt='space'></img>
       <h1 className='ARTICLES'>FETAURED ARTICLES</h1>
        </>
        )
}
    
export default Mainimage