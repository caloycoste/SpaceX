import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Missions from './Missions'
import History from './history'

function Navigation() {

    const styles = {
        
        navBar: {
            height:80,
            backgroundColor:'gray',
            display:'flex'
        },

        navItems: {
            listStyleType: 'none',
            display:'flex',
            alignItems: 'center'
        },

        navLinks: {
            marginRight: 20,
            color:'white',
            textDecoration: 'none',
            fontSize: 30,
        }
    }
    return (
        <div landingPage> 
            <BrowserRouter>
            <div style={styles.navBar}>
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
