import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './FoodMenuCarousal.css';

const FoodMenuCarousal = ({ FetchedMenu }) => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='MainCustomersCarousal'>
      <h1 className='MainMenuHeadingH1'>Our Menu</h1>
      <div className="InnerCustomersCarousal">
        <Slider ref={slider} className='Slider' {...settings}>
          {FetchedMenu.map((row, index) => (
            <div key={index}>
              <div className='innersliderDiv'>
                {/* New header inside each item */}
                <h2 className='ItemCardHeader'>{row.dishName}</h2>

                <div className='image'>
                  <img width="200px" height="200px" src={row.imgUrl} alt={row.dishName} />
                </div>
                <div className="itemNameAndCost">
                  <h3>{row.cuisine}</h3>
                  <h3>${row.foodItemCost}</h3>
                </div>
                <p>{row.foodType}</p>
                <div className="quantityAndTime">
                  <h4>
                    <svg width="18px" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                    {row.cal}
                  </h4>
                  <h4>
                    <svg width="18px" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    {row.rating}
                  </h4>
                </div>
                <button className='OrderNowBtn'>Order now</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FoodMenuCarousal;
