import React from 'react'

import CircleImage from "../../../Assets/HomePageImages/plate-food.png"


const BasicDetailsSec = () => {
    const cardDetails=[{
        imgUrl:"https://pipingpotcurry.com/wp-content/uploads/2019/09/Instant-Pot-Vegetable-Biryani-Ingredients-Piping-Pot-Curry-1.jpg",
        heading:"Fresh Ingredients",
        para:"Indulge in flavors crafted with care, where every dish is a tribute to the freshest ingredients."
      },
      {
        imgUrl:"https://recipes.net/wp-content/uploads/2023/05/air-fryer-chicken-biryani-recipe_6968eb6ab4a5ae22d136dab86c9ea8af.jpeg",
        heading:"Handmade Foods",
        para:"Savor the comforting embrace of home-cooked goodness in every bite, where every dish is a taste of heartwarming nostalgia."
      },
      {
        imgUrl:"https://www.marcellinaincucina.com/wp-content/uploads/2019/01/Ragu-Pasta-Sauce-blog-1-1.jpg",
        heading:"`Secret Recipe` Sauce",
        para:"Discover the tantalizing magic of our signature 'Secret Recipe' Sauce, adding a whisper of mystery to every dish."
      }];
  return (
    <div className="basicDetailsSection">
      <div className="basicDetailsCircleSection">
        <img className='circleImage' width="45%" src={CircleImage} alt="" />
      </div>
      <div className="basicDetailsCardSection">
      {cardDetails.map((row, index) => (          
        <div key={index} className="basicInfoCard">
          <div className="cardInnerSection">
            <img className='cardImg' width="200px" height="200px" src={row.imgUrl} alt="" />
            <h1 className='cardH1tag'>{row.heading}</h1><br/>
            <p>{row.para}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BasicDetailsSec
