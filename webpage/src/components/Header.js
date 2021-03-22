import React from 'react'
import HeaderSection from './HeaderSection'
import {firstObj} from './HeaderData'
import './Header.css'

function Header() {
    return (
        <div>
            <HeaderSection {...firstObj}/>
        </div>
    )
}

export default Header
