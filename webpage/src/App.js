import './App.css';
import Header from './components/Header'
import History from './components/history'
import SearchHistory from './components/search-history'
import Rockets from './components/rockets'
import SearchRockets from './components/search-rockets'
import UpcomingCapsules from './components/UpcomingCapsules'
import Missions from './components/Missions'

function App() {

  return (
    <div className="App">
      <Header />
      <History />
      <SearchHistory />
      <Rockets />
      <SearchRockets />
      <UpcomingCapsules/>
      <Missions/>
    </div>
  );
}

export default App;
