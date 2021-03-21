import './App.css';
import Header from './components/Header'
import History from './components/history'
import Rockets from './components/rockets'
import UpcomingCapsules from './components/UpcomingCapsules'
import Missions from './components/Missions'
import Navbar from './Navigation/Navbar';

import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Header} />
          <Route path='/history' exact component={History} />
          <Route path='/capsules' component={UpcomingCapsules} />
          <Route path='/missions' component={Missions} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
