import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='MainFooter'>
        <div className="upperContent">
            <div className="logoWithQuote">
                <div className="CenterContent">
                    <div className="Footerlogo">TasteExpress</div><br/>
                    <div className="FooterQuote">Taste the world with us.<br/> Your Food awaits!</div>
                </div>
            </div>
            <div className="FooterList">
                <div className="CenterContent">
                    <div className="oneTwo">
                        <ul>
                            <li>Company</li>
                            <li><div className="underLine"></div></li>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="CenterContent">
                    <div className="threeFour">
                        <ul>
                            <li>Get Help</li>
                            <li><div className="underLine1"></div></li>
                            <li>FAQ</li>
                            <li>Our Community</li>
                            <li>Payment Options</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="GetInTouch">
            <div className="CenterContent">
                <div className='heading'>Get in touch</div>
                {/* <div className="underLine2"></div> */}
                <div className="socialMedialLinks">
                    <ul >
                        <li className='fb'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </li>
                        <li className='twitter'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                        </li>
                        <li className='linkedIn'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div className="lowerContent">
            <div className="CenterContent">
                <div className="seperator"></div>
                <div className="copyrights" style={{display:"flex", justifyContent:"center"}}>
                    <svg style={{width:"15px", height:"15px",backgroundColor:"grey",borderRadius:"50%",border:"1px solid grey",marginTop:"4px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"/></svg>
                    <pre>  </pre> 2024 SK, All rights reserved.  
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer
