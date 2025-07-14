import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import FoodMenuCarousal from '../../Components/FoodMenuCarousal/FoodMenuCarousal'
import axios from 'axios'
import MenuItemDetails from '../../Data/MenuDataList/Menu';

const Menu = () => {
  const [FetchedMenu, setFetchedMenu] = useState([]);
   
  const baseURL = 'http://localhost:8080/API/FoodMenu/';

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${baseURL}All`);
      setFetchedMenu(response.data);  
    } catch (error) {
      console.error('Failed to fetch cart items', error);
      setFetchedMenu(MenuItemDetails)
    }
  };
  return (
    <div className='MenuOuterMainSection'>
      <div className="MenuInnerMainSection">
        <div className="MenuIntroSection">
          <div className="pngs meat"></div>
          <div className="pngs soup"></div>
          <div className="pngs omlet"></div>
          <div className="pngs plant"></div>
          <div className="pngs chillies"></div>
          <div className="pngs coffeeBeans"></div>
          <div className="pngs flourBowl"></div>
          <div className="pngs leaves"></div>
          <div className="pngs Shawarma"></div>
          <div className="pngs flour"></div>
          <div className="pngs dessert"></div>
          <div className="IntroContent">
            <h1 className='menuHeadingH1'>Fast, tasty & served well</h1><br/>
            <p className='menuParap'>100% Healthy and Natural foods</p><br/><br/>
            <button><Link className='navLink' to="MenuList">See Full Menu</Link></button>
          </div>
        </div>
        <div className="FoodItemsMenu">
          <FoodMenuCarousal FetchedMenu={FetchedMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Menu
