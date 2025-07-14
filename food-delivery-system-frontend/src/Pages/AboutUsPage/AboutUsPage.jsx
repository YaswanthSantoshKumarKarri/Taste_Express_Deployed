import React from 'react'

import './AboutUsPage.css';
import AboutUsPic from '../../Assets/AboutUsPage/360_F_636360143_g6f0Pp843joz8EdUVsMnKVujyLS9vZ7f-removebg-preview.png'

const AboutUsPage = () => {
  return (
    <>
        <div className="MainHeadingSection">
            <div className="mask"></div>
            <h1>About Us</h1>
        </div>
        <div className="AboutUsDetailsSection">
            <div className="leftAboutUsDetailsSection">
                <img width='300px' src={AboutUsPic} alt="" />
            </div>
            <div className="rightAboutUsDetailsSection">
                <h1>Our Story</h1>
                <p>
                Welcome to Taste-Express! I'm Yaswanth Santosh Kumar Karri, the brains behind this culinary adventure. With a passion for both technology and taste, I embarked on a journey to create a seamless experience for food lovers like you.
                <br/><br/>
                At Taste-Express, we blend the art of coding with the love for exquisite flavors, offering a platform where you can explore diverse cuisines from the comfort of your home. Our mission is simple: to connect you with your favorite dishes while ensuring convenience and reliability every step of the way. Join us in savoring the joy of delicious meals delivered straight to your doorstep, courtesy of cutting-edge technology and a dash of personalized service.
                </p>
                <h2>Yaswanth Santosh Kumar Karri</h2>
                <h4>Full-Stack Developer, Taste-Express</h4>
            </div>
        </div>
    </>
  )
}

export default AboutUsPage