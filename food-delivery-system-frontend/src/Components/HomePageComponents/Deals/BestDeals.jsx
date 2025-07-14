import React from 'react'

const BestDeals = () => {
  return (
    <div className="DealsOuterSection">
        <div className="headingAndViewBtn">
          <h1 className='dealsH1Tag'>Best Deals!</h1>
          <div className="dealsViewAllBtn">
            <button>VIEW ALL</button>
          </div>
        </div>
        <div className="mainOffersSection">
            <div className="grandOffer">
                <img width="488px" height="388px" src="https://static.vecteezy.com/system/resources/previews/015/933/115/non_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg" alt="" />
                <h1>Save <br/>35%</h1>
                <div className="rightGrandOffer">
                    <h4>Big Deal!</h4><br/>
                    <h1>Big Meat Monsta</h1><br/>
                    <p>Nunc tellus pellentesque ut est fames vitae dui posuere.</p><br/>
                    <h1>$18</h1>
                </div>
            </div>
            
            <div className="miniSubOffers">
            <div className="miniOffer">
                <img width="288px" height="388px" src="https://c4.wallpaperflare.com/wallpaper/716/607/800/cuisine-food-india-indian-wallpaper-preview.jpg" alt="" />
                <h1 className='miniOfferH11'>Save <br/>35%</h1>
                <div className="rightGrandOffer">
                    <h4>Big Deal!</h4><br/>
                    <h1>Big Meat Monsta</h1><br/>
                    <p>Nunc tellus pellentesque ut est fames vitae dui posuere.</p><br/>
                    <h1>$18</h1>
                </div>
            </div>
            <div className="miniOffer">
                <img width="288px" height="388px" src="https://tb-static.uber.com/prod/image-proc/processed_images/97beafe62eabda8ae2c99b3073131895/d24a30ada2fef6c54cef8739d94823b0.webp" alt="" />
                <h1 className='miniOfferH12'>Save <br/>35%</h1>
                <div className="rightGrandOffer">
                    <h4>Big Deal!</h4><br/>
                    <h1>Big Meat Monsta</h1><br/>
                    <p>Nunc tellus pellentesque ut est fames vitae dui posuere.</p><br/>
                    <h1>$18</h1>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default BestDeals
