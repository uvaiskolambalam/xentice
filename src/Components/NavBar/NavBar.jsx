import React, { useRef } from 'react'
import './NavBar.css'
import location from '../../Assets/location.png'
import LoginLogout from '../../Assets/LoginLogout.png'
import megaphone from '../../Assets/megaphone.png'
import menuListIcon from '../../Assets/list.svg'
import bell from '../../Assets/bell.png'
import brush from '../../Assets/brush.png'
import user from '../../Assets/user.png'
import tag from '../../Assets/tag.png'
import { useState } from 'react'
import useOnClickOutside from '../../Helpers/UseClickOutside'
const NavBar = ({handleMenu,menuList,setMenuList}) => {
    
    
    const menu = useRef(null);
    useOnClickOutside(menu, () => setMenuList(false));
    return (
        <div className='NavBar'>
            {/* <div className="NavBar-left"> */}
            <div className='NavBarLeft'>
                <img className='NavBarMenuListIcon' src={menuListIcon} alt="" onClick={()=>handleMenu()} ref={menu} />
                <p className='NavBar-left'>xentic</p>

            </div>
            {menuList ?
                <div >
                    <div className='menuList-container'>
                        <h4 className='menuList-heading'>xentic</h4>
                        <div className="menuList">
                            <img src={bell} alt="" />
                            <span>Post Requirments</span>
                        </div>
                        <div className="menuList">
                            <img src={megaphone} alt="" />
                            <span>Post Ad</span>
                        </div>
                        <div className="menuList">
                            <img src={brush} alt="" />
                            <span>Post Services</span>
                        </div>
                        <div className="menuList">
                            <img src={user} alt="" />
                            <span>Profile</span>
                        </div>
                        <div className="menuList">
                            <img src={bell} alt="" />
                            <span>Notifications</span>
                        </div>
                        <div className="menuList">
                            <img src={location} alt="" />
                            <span>Near Me</span>
                        </div>
                        <div className="menuList">
                            <img src={tag} alt="" />
                            <span>Pricing</span>
                        </div>
                        <div className='menuList-hrLine'>
                            <hr />
                        </div>
                        <div className="menuList">
                            <img src={LoginLogout} alt="" />
                            <span>Login/Signup</span>
                        </div>

                    </div>
                </div>
                :
                ""
            }

            <div className="NavBar-right">
                <div className='nav-list'>
                    <img src={megaphone} alt="" />
                    <span>Post Ad</span>
                </div>
                <div className='nav-list'>
                    <img src={location} alt="" />
                    <span>Near Me</span>
                </div>
                <div className='nav-list'>
                    
                    <img src={LoginLogout} alt="" />
                    <span>Login/Signup</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar