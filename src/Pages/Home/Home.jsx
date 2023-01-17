import React, { useState } from 'react'
import Add from '../../Components/Add/Add'
import BottomNav from '../../Components/BottomNav/BottomNav'
import Footer from '../../Components/Footer/Footer'
import MainPage from '../../Components/MainPage/MainPage'
import Menu from '../../Components/Menu/Menu'
import NavBar from '../../Components/NavBar/NavBar'
import Products from '../../Components/Products/Products'
import './Home.css'
import axios from 'axios'
import { useEffect } from 'react'
import { json } from 'react-router-dom'
import commercialShop from '../../Assets/commercial-shop.png'
import commercialOffice from '../../Assets/commercial_office.png'
import commercialLand from '../../Assets/commercial_land.png'
import commercialBuilding from '../../Assets/commercial-building.png'
import IndustrialBuilding from '../../Assets/building_lease.png'
import IndustrialLand from '../../Assets/land_lease.7ccc6444.png'
import coWorkingSpace from '../../Assets/coworking.ae2d86ad.png'
import PrivateOffice from '../../Assets/private-office.png'
import MeetingRoom from '../../Assets/meeting-room.0b5c79ff.png'

const Home = () => {
    const [allProducts,setAllProducts]=useState([])
  
    useEffect(() => {
        axios.get('https://api.xentice.com/api/postadSelect').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].propertyType = JSON.parse(response.data[i].propertyType)
                response.data[i].details = JSON.parse(response.data[i].details)
                response.data[i].images = JSON.parse(response.data[i].images)
                response.data[i].location = JSON.parse(response.data[i].location)
                
            }
            console.log(response.data,'hhh');
            setAllProducts(response?.data)
        })
    // getProducts()
    }, [])
    const [menuList, setMenuList] = useState(false)
    const handleMenu = () => {
        setMenuList(!menuList)
    }
    return (
        <div className='Home'>
            {menuList ? <div className='blur'> </div> :""}
                
            <div>
                <NavBar handleMenu={handleMenu} menuList={menuList} setMenuList={ setMenuList} />
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <MainPage />
            </div>
            <div>
                <BottomNav />
            </div>
            <div>
                <Add/>
            </div>
            <div>
                <Products allProducts={allProducts} category={"Commercial Shop"} icon={commercialShop} />
                <Products allProducts={allProducts} category={"Commercial Office"} icon={commercialOffice}/>
                <Products allProducts={allProducts} category={"Commercial Land"} icon={commercialLand}/>
                <Products allProducts={allProducts} category={"Commercial Building"} icon={commercialBuilding}/>
                <Products allProducts={allProducts} category={"Industrial Building"} icon={IndustrialBuilding}/>
                <Products allProducts={allProducts} category={"Industrial Land"} icon={IndustrialLand}/>
                <Products allProducts={allProducts} category={"Co-working Space"} icon={coWorkingSpace}/>
                <Products allProducts={allProducts} category={"Private Office"} icon={PrivateOffice}/>
                <Products allProducts={allProducts} category={"Meeting Room"} icon={MeetingRoom}/>
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    )
}

export default Home