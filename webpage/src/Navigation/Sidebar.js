import React from 'react'
import * as AiIcons from 'react-icons/ai'

export const Sidebar = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        className:'nav-text'
    },
    {
        title:'History',
        path:'/history',
        icon:<AiIcons.AiFillBook/>,
        className:'nav-text'
    },

    {
        title:'Capsules',
        path:'/capsules',
        icon:<AiIcons.AiFillRocket/>,
        className:'nav-text'
    },

    {
        title:'Missions',
        path:'/missions',
        icon:<AiIcons.AiFillFlag/>,
        className:'nav-text'
    },

]
