import React from 'react'
import './Footer.css'
import googlePlay from '../../Assets/google-play-badge.609afac0.png'
import AppStore from '../../Assets/badge-download-on-the-app-store.e8046ecc.png'
const Footer = () => {
  return (
      <div className='Footer'>
          <div className="Footer-menuList">
              <div className="MenuList">
                  <ul>
                  <h4>ABOUT</h4>
                      <li>
                          <a href="">How Xentice works</a>
                      </li>
                      <li>
                          <a href="">Founders Letter</a>
                      </li>
                      <li>
                          <a href="">Newsroom</a>
                      </li>
                      <li>
                          <a href="">Investors</a>
                      </li>
                      <li>
                          <a href="">Xentice Gold</a>
                      </li>
                      <li>
                          <a href="">Xentice Platinum</a>
                      </li>
                      <li>
                          <a href="">Startup Support</a>
                      </li>
                      <li>
                          <a href="">Careers</a>
                      </li>
                  </ul>
              </div>
              <div className="MenuList">
              <ul>
                  <h4>EXPLORE</h4>
                      <li>
                          <a href="">Diversity & Discrimination</a>
                      </li>
                      <li>
                          <a href="">Accessibility</a>
                      </li>
                      <li>
                          <a href="">Xentice Associates</a>
                      </li>
                      <li>
                          <a href="">Xentice Team</a>
                      </li>
                      <li>
                          <a href="">Xentice Mall</a>
                      </li>
                      <li>
                          <a href="">Xstudio</a>
                      </li>
                      <li>
                          <a href="">Xmoney</a>
                      </li>
                      <li>
                          <a href="">Entice Spaces</a>
                      </li>
                  </ul>
              </div>
              <div className="MenuList">
              <ul>
                  <h4>SERVICES</h4>
                      <li>
                          <a href="">Buttons & Badges</a>
                      </li>
                      <li>
                          <a href="">Mobile Apps</a>
                      </li>
                      <li>
                          <a href="">For Companies</a>
                      </li>
                      <li>
                          <a href="">Mobile Apps</a>
                      </li>
                      <li>
                          <a href="">Review Professionals</a>
                      </li>
                      <li>
                          <a href="">Suggested Professionals</a>
                      </li>
                      <li>
                          <a href="">Resource Centre</a>
                      </li>
                      <li>
                          <a href="">Community Centre</a>
                      </li>
                  </ul>
              </div>
              <div className="MenuList">
              <ul>
                  <h4>SUPPORT</h4>
                      <li>
                          <a href="">Our COVID-19 Response</a>
                      </li>
                      <li>
                          <a href="">Help Centre</a>
                      </li>
                      <li>
                          <a href="">Cancellation options</a>
                      </li>
                      <li>
                          <a href="">Neighbourhood Support</a>
                      </li>
                      <li>
                          <a href="">Corporate contact</a>
                      </li>
                      <li>
                          <a href="">Trust & Safety</a>
                      </li>
                      <li>
                          <a href="">FAQ</a>
                      </li>
                      <li>
                          <a href="">Payment gateway</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="Footer-other-details">
              <div className="container">
                  <h4>DISCLAIMER</h4>
                  <p>Please do not share your xentice password, Credit/Debit card pin, other confidential information with anyone even if he/she claims to be from xentice. We advise our customers to completely ignore such communications & report to us at support@xentice.com.</p>
              </div>
              <div className='gPlay-appStore'>
                  <img src={googlePlay} alt="" />
                  <img src={AppStore} alt="" />
              </div>
              
          </div>
          <div >
              <hr />
          </div>
              <div className="Footer-bottom">
                  <p>© Xentice Group of Companies 2023 . All Rights Reserved</p>
                  <ul>
                      <li>
                          <a href="">About Us</a>
                      </li>
                      <li>
                          <a href="">Contact Us</a>
                      </li>
                      <li>
                          <a href="">Privacy Policy</a>
                      </li>
                  </ul>
              </div>
          
    </div>
  )
}

export default Footer