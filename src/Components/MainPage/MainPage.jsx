import React from 'react'
import './MainPage.css'
import mainImage from '../../Assets/Home Image.jpeg'
const MainPage = () => {
  return (
      <div className='MainPage'>
          <div className="detailsBox">
              <p className='headding'>Choose from 25,00+ Spaces for your Business</p>
              <p>Get inspired and find your perfect place</p>
              <div className='input-button'>
                  <select className='select-section'>
                      <option value>Looking for</option>
                      <option value="">Commerical Shop</option>
                      <option value="">Commerical Office</option>
                      <option value="">Commerical Land</option>
                      <option value="">Commerical Building</option>
                      <option value="">Industrial Building</option>
                      <option value="">Industrial Land</option>
                      <option value="">Co-working Space</option>
                      <option value="">Meeting Room</option>
                  </select>
                  <select className='select-section'>
                      <option value>Select City</option>
                      <option value="">Delhi</option>
                      <option value="">Noida</option>
                      <option value="">heyderabad</option>
                      <option value="">Mumbai</option>
                     
              </select>
              
              <button className='search-button'>Search</button>
              </div>
          </div>
          <div className="bgImage">
              <img src={mainImage} alt="" />
          </div>
    </div>
  )
}

export default MainPage