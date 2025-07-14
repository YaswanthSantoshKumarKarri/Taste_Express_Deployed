import React, { useEffect, useState } from 'react'
import "./Home.css"
import BestDeals from '../../Components/HomePageComponents/Deals/BestDeals';
import BasicDetailsSec from '../../Components/HomePageComponents/BasicDetailsSec/BasicDetailsSec';
import { NavLink } from 'react-router-dom';
const Home = () => {
  //check if logged In
  const [loggedIn,setLoggedIn]=useState(true);
  const storedToken = localStorage.getItem('userData');
  // const parsedTokenData = JSON.parse(storedToken);
  // setTokenData(parsedTokenData);
  useEffect(() => {
      if(storedToken!==null){
        setLoggedIn(true);
      }
  },[]);

  return (
    <>
      <div className="HomeMainOuterSection">
        <div className="HomeMainInnerSection">
          <div className="IntroHomeSection">
            <h1>Authentic Indian Foods</h1>
            <p>Experience the vibrant flavors of India, crafted with tradition, delivered with care.</p>
            <div className="IntroBtns">
              {loggedIn ? (
                <>
                  <button><NavLink className="navLink" to="/Menu">Menu</NavLink></button>
                </>
              ) : 
              ( 
                <>
                  <button><NavLink className="navLink" to="/SignUp">Sign Up</NavLink></button>
                  <button><NavLink className="navLink" to="/logIn">Sign In</NavLink></button>
                </>
              )}

            </div>
          </div>
          <BasicDetailsSec/>
          <div className="basicViewMenuSection">
            <div className="basicViewInnerSection">
              <h1 className='h1basicViewInnerSection'>Bringing Happiness<br/> To You</h1><br/>
              <button><NavLink className="navLink" to="/Menu">VIEW MENU</NavLink></button>          
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
