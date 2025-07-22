import React, { useEffect, useRef, useState } from 'react';
import MenuItemDetails from '../../Data/MenuDataList/Menu';
import './MenuList.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Data/CartMenu/CartMenuHandles';

const MenuList = () => {
  const [fetchedMenu, setFetchedMenu] = useState([]);
  const inputRef = useRef(null);
  const carts = useSelector((store) => store.cart.items);

  const [templateCart] = useState({
    foodMenu: {
      id: null,
      dishName: '',
      ingredients: [],
      cuisine: '',
      imgUrl: '',
      cal: 0,
      rating: 0,
      foodType: '',
      foodItemCost: 0,
    },
    quantity: '1',
    deliveryCharges: '20.0',
    discount: '20.0',
  });

  const dispatch = useDispatch();
  const baseURL = 'http://localhost:8080/API/FoodMenu/';
  const cartBaseURL = 'http://localhost:8080/API/Cart/';

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(`${baseURL}All`);
      setFetchedMenu(response.data);
    } catch (error) {
      console.error('Failed to fetch menu items, using fallback:', error);
      setFetchedMenu(MenuItemDetails);
    }
  };

  const handleCreateCartItem = async (CartItem) => {
    const updatedCartItem = {
      ...templateCart,
      foodMenu: { ...CartItem },
    };

    try {
      await axios.post(`${cartBaseURL}createCartItem`, updatedCartItem);
    } catch (error) {
      dispatch(
        addToCart({
          foodMenu: { ...CartItem },
          quantity: 1,
        })
      );
      console.error('Failed to create cart item', error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [filteredCategory, setFilteredCategory] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleFilterCategory = (value) => {
    setFilteredCategory(value);
    setCurrentPage(1);
  };

  const handleSelectSearchTerm = (term) => {
    const trimmed = term.trim();
    if (trimmed && !selectedItems.includes(trimmed)) {
      setSelectedItems([...selectedItems, trimmed]);
    }
    setInputValue('');
  };

  const removeSearchTerm = (term) => {
    setSelectedItems(selectedItems.filter((item) => item !== term));
  };

  let filteredItems = [...fetchedMenu];

  if (filteredCategory) {
    filteredItems = filteredItems.filter(
      (item) =>
        item.foodType &&
        item.foodType.toLowerCase() === filteredCategory.toLowerCase()
    );
  }

  const allSearchTerms = [...selectedItems];
  if (inputValue.trim() && !allSearchTerms.includes(inputValue.trim())) {
    allSearchTerms.push(inputValue.trim());
  }

  if (allSearchTerms.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      allSearchTerms.some((term) =>
        item.dishName.toLowerCase().includes(term.toLowerCase())
      )
    );
  }

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = filteredItems.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="MenuListSection">
      <h1 className="MainMenuHeadingH1">Our Menu</h1>

      <div className="ItemsFilteration">
        <div className="categoryFilter">
          <select
            defaultValue="Select Here"
            onChange={(e) => handleFilterCategory(e.target.value)}
            className="ListOfFilterTypes"
          >
            <option value="">All Categories</option>
            <option value="Snack / Appetizer">APPETIZERS</option>
            <option value="Salad">SALADS</option>
            <option value="Main Course">MAIN COURSE</option>
            <option value="ITALIAN">ITALIAN</option>
            <option value="Cocktail">COCKTAILS</option>
            <option value="Dessert">DESSERTS</option>
            <option value="Beverage">BEVERAGES</option>
          </select>
        </div>

        <div className="searchBar">
          <div className="tagInputWrapper" onClick={() => inputRef.current?.focus()}>
            {selectedItems.map((item) => (
              <span key={item} className="SearchTag">
                {item}
                <button onClick={() => removeSearchTerm(item)}>×</button>
              </span>
            ))}
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && inputValue.trim()) {
                  handleSelectSearchTerm(inputValue);
                } else if (e.key === 'Backspace' && inputValue === '') {
                  removeSearchTerm(selectedItems[selectedItems.length - 1]);
                }
              }}
              placeholder="Type to search..."
              className="tagInputField"
            />
          </div>
        </div>
      </div>

      <div className="FoodItemsCardSection">
        {currentPosts.length === 0 ? (
          <p>No items found.</p>
        ) : (
          currentPosts.map((row, index) => (
            <div key={index} className="FoodItemsInfoCard">
              <div className="FoodItemsCardInnerSection">
                <img
                  className="FoodItemImg"
                  src={row.imgUrl}
                  alt={row.dishName}
                />
                <h3 className="FoodItemName">{row.dishName}</h3>
                <div className="RatingCal">
                  <div className="Rating">Rating: {row.rating}</div>
                  <p>Cal: {row.cal}</p>
                </div>
                <button className="OrderNowBtn" onClick={() => handleCreateCartItem(row)}>
                  Order Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="paginationControls">
        {firstPostIndex !== 0 && (
          <svg
            onClick={() => setCurrentPage((prev) => prev - 1)}
            style={{
              background: 'red',
              borderRadius: '15px',
              cursor: 'pointer',
            }}
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        )}
        <p>{currentPage}</p>
        {lastPostIndex < filteredItems.length && (
          <svg
            onClick={() => setCurrentPage((prev) => prev + 1)}
            style={{
              background: 'red',
              borderRadius: '15px',
              cursor: 'pointer',
            }}
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default MenuList;
