import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import "./NavBar.css"
import { useSelector } from 'react-redux'
const NavBar = () => {
    const [totalQuantity,setTotalQuantity]=useState(0)
    const carts=useSelector(store=>store.cart.items);
    useEffect(()=>{
      let total=0;
      carts.forEach(item => total += item.quantity); 
      setTotalQuantity(total)
    },[carts])
  return (
    <>
      <div className="NavBarOuterMainSection">
        <div className="NavBarInnerMainSection">
          <div className="leftNavBarSection">
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <svg width="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          </div>
          <div className="middleNavBarSection">
            <div className="LogoTitle">TasteExpress</div>
            <div className="NavBarList">
              <ul>
                <li><NavLink className="navLink" to="/">HOME</NavLink></li>
                <li><NavLink className="navLink" to="/Menu">OUR MENU</NavLink></li>
                <li><NavLink className="navLink" to="/AboutUs">ABOUT</NavLink></li>
                <li><NavLink className="navLink" to="/Cart">CART {totalQuantity==0 ? "": totalQuantity}</NavLink></li>
                <li><NavLink className="navLink" to="/Dash-board">DASHBOARD</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="rightNavBarSection">
            <button><NavLink className="navLink" to="/logIn">SIGN IN</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
