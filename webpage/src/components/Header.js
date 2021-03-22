import React from 'react'
import { AiFillExclamationCircle } from 'react-icons/ai'
import Navigation from '../Navigation/Navigation'

function Header() {
    return (
        <div>
            <Navigation />
            <div style={styles.container}>
                <div>
                    <h1 style={styles.title}>Space X Data</h1>
                </div>

            </div>
            <div>
            </div>
        </div>

    )
}

const styles = {

    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',

    },

    title: {
        color: 'white',
        fontSize: 80,
        textAlign: 'center',
        padding: 20

    },

    image: {
        alignItems:'center',

}
}


export default Header
