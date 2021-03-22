import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import './Navigation.css'

function Navigation() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>

            <div className='navbar'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png'
                style={{width:200, padding:30,}}
            />
                <Link to='#' className='nav-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className='navigation'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/data' className='nav-link'>Data</Link>
                    <Link to='/contact-us' className='nav-link'>Contact</Link>
                </div>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='nav-text'><Link to='/' >Home</Link></li>
                    <li className='nav-text'><Link to='/data' className='nav-text'>Data</Link></li>
                    <li className='nav-text'><Link to='/contact-us' className='nav-text'>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}




export default Navigation
