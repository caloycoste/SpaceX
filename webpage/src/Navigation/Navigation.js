import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { Sidebar } from './Sidebar'

import './Navigation.css'

function Navigation() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div>

            <div className='navbar'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png'
                    style={{padding: 10 }}
                />
                <Link to='#' className='nav-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className='navigation'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/missions' className='nav-link'>Missions</Link>
                    <Link to='/history' className='nav-link'>History</Link>
                    <Link to='/capsules' className='nav-link'>Capsules</Link>
                    <Link to='/contact-us' className='nav-link'>Contact</Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul onClick={showSidebar}>
                    {Sidebar.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon} <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}




export default Navigation
