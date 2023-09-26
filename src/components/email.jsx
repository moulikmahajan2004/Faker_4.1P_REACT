import React from 'react'
import './email.css'



function email() {
return (
    <>
    <div className='divnav1'>
    <ul className='list1'>
    <li className='li1'><h2 className='head2'>SIGN UP FOR DAILY INSIDER</h2></li>
    <li className='li1'><input className='Search1' type='search' placeholder='
    Enter your email'></input></li>
    <li className='li1'> <button className='login1'>LOGIN</button></li>
    </ul>
    </div>

    <div className='box'>
        <h2 className='explore'>EXPLORE  SUPPORT STAYCONNECTED</h2>
        <h4 className='explore1'>Home     Faq's  </h4>
        <h4 className='explore2'>Question Help </h4>
        <h4 className='explore3'>Article  Tutorials </h4>
        <h4 className='explore'>Tutorial  </h4>

        <h2 className='dev'>DEV@DEAKIN 22</h2>
        <h4 className='codeofconduct'>
          <h4 className='one1'>Privacy</h4>
          <h4 className='one1'>policy </h4>
          <h4 className='one1'>code of conduct</h4>
        </h4>
    </div>
    </>
  )
}

export default email
