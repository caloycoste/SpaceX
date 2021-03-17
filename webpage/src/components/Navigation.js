import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Missions from './Missions'
import History from './history'

function Navigation() {

    const styles = {

        navBar: {
            backgroundColor: 'gray',
            display: 'flex',
            height: 735,
            backgroundImage: 'url(https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            backgroundAttachment: 'fixed',
            alignItems: 'center',
            justifyContent: 'center'
        },

        navItems: {
            listStyleType: 'none',
            display: 'flex',
            alignItems: 'center',
            translateX: -100,
        },

        navLinks: {
            marginRight: 20,
            color: 'white',
            textDecoration: 'none',
            fontSize: 30,
        }
    }
    return (
        <div style={styles.landingPage}>
            <BrowserRouter>
                <div style={styles.navBar}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png' style={{width:400}}/>
                    <ul style={styles.navItems}>
                        <li>
                            <Link Link to='/' style={styles.navLinks}>Home</Link>
                        </li>
                        <li>
                            <Link Link to='/history' style={styles.navLinks}>History</Link>
                        </li>
                        <li>
                            <Link Link to='/missions' style={styles.navLinks}>Missions</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <Switch>
                        <Route exact path='/history' component={History} />
                        <Route exact path='/missions' component={Missions} />

                    </Switch>
                </div>
            </BrowserRouter>
        </div>

    )
}





export default Navigation
