import './App.css';
import Header from './components/Header'
import History from './components/history'
import UpcomingCapsules from './components/UpcomingCapsules'
import Missions from './components/Missions'
import Contact from './Screens/Contact'
import Navigation from './Navigation/Navigation'


import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/history' exact component={History} />
          <Route path='/capsules' component={UpcomingCapsules} />
          <Route path='/missions' component={Missions} />
          <Route path='/contact-us' component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
