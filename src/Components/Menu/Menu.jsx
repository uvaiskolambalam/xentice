import React from 'react'
import './Menu.css'
import commertialShop from '../../Assets/commercial-shop1.png'
import IndustrialBuilding from '../../Assets/image-1.png'
import commercialBuilding from '../../Assets/commercialBuilding.png'
import commercialLnad1 from '../../Assets/commercial_land copy1.png'
import commercialOffice from '../../Assets/commercial_office copy1.png'
import privateOffice from '../../Assets/private-office.png'
import coWorkingSpace from '../../Assets/co-working-space.png'
import { useNavigate } from "react-router-dom";
// import commercialBuilding from '../../Assets/commercial-building.png'
// const navigate=useNavigate()
const Menu = () => {
    // const navigate = useNavigate();
    // const viewDetails = () => [
    //     navigate('/viewDetails')
    // ]
  return (
      <div className='Menu'>
          <div className='Menu-list' >
              <img src={commertialShop} alt="" />
              <p>Commercial Shop</p>
          </div>
          <div className='Menu-list'>
              <img src={commercialOffice} alt="" />
              <p>Commercial Office</p>
          </div>
          <div className='Menu-list'>
              <img src={commercialLnad1} alt="" />
              <p>Commercial Land</p>
          </div>
          <div className='Menu-list'>
              <img src={commercialBuilding} alt="" />
              <p>Commercial Building</p>
          </div>
          <div className='Menu-list'>
              <img src={IndustrialBuilding} alt="" />
              <p>Industrial Building</p>
          </div>
          <div className='Menu-list'>
              <img src={commercialBuilding} alt="" />
              <p>Industrial Lnad</p>
          </div>
          <div className='Menu-list'>
              <img src={commercialBuilding} alt="" />
              <p>Co-working-Space</p>
          </div>
          <div className='Menu-list'>
              <img src={privateOffice} alt="" />
              <p>Private Office</p>
          </div>
          <div className='Menu-list'>
              <img src={coWorkingSpace} alt="" />
              <p>Meeting Room</p>
          </div>
    </div>
  )
}

export default Menu