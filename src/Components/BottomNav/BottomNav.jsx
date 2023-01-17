import React from 'react'
import './BottomNav.css'
import imgOne from '../../Assets/bottom-nav/img-1.png'
// import imgTwo from '../../Assets/bottom-nav/img-1.png'
import imgThree from '../../Assets/bottom-nav/img-3.png'
import imgFour from '../../Assets/bottom-nav/img-4.png'
import imgFive from '../../Assets/bottom-nav/img-5.png'
import imgSix from '../../Assets/bottom-nav/img-6.png'
import imgSeven from '../../Assets/bottom-nav/img-7.png'
import imgEight from '../../Assets/bottom-nav/img-8.png'
import imgNine from '../../Assets/bottom-nav/img-9.png'
// import imgTen from '../../Assets/bottom-nav/img-1.png'
import imgEleven from '../../Assets/bottom-nav/img-11.png'
const BottomNav = () => {
  return (
      <div className='Bottom-nav'>
          <div className="bottom-nav-list">
              <img src={imgOne} alt="" />
              <p>Builders</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgOne} alt="" />
              <p >Architects</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgThree} alt="" />
              <p >Banking</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgFour} alt="" />
              <p>ITSupport</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgFour} alt="" />
              <p>IT Support</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgFive} alt="" />
              <p> Labourers</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgSix} alt="" />
              <p >Mentors</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgSeven} alt="" />
              <p >Advocates</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgEight} alt="" />
              <p >Insurance</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgNine} alt="" />
              <p >Lifestyle</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgNine} alt="" />
              <p >Exentic Mart</p>
          </div>
          <div className="bottom-nav-list">
              <img src={imgEleven} alt="" />
              <p >Echo Living</p>
          </div>
    </div>
  )
}

export default BottomNav