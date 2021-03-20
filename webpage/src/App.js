import './App.css';
import Navigation from './components/Navigation'
import Header from './components/Header'
import History from './components/history'
import Rockets from './components/rockets'
import UpcomingCapsules from './components/UpcomingCapsules'
import Missions from './components/Missions'

function App() {

  return (
    <div className="App">
      <Header/>
      <History/>
      <Rockets/>
      <UpcomingCapsules/>
      <Missions/>
    </div>
  );
}

export default App;
