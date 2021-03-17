import React from 'react'

function Header() {
    return (
        <header>
            <div style={{
                height: 400,
                backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <text style={{ fontSize: 150, color: 'white' }}>Space X Data</text>

            </div>
        </header>

    )
}


export default Header
