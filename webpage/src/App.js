import './App.css';
import Header from './components/Header'
import History from './components/history'
import SearchHistory from './components/search-history'
import Rockets from './components/rockets'
import SearchRockets from './components/search-rockets'
import UpcomingCapsules from './components/UpcomingCapsules'
import Missions from './components/Missions'
import MissionsTable from './components/MissionsTable'
import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://api.spacexdata.com/v3/missions')
          .then((response) => response.json())
          .then((data) => setData(data));
  }
  )

  return (
    <div className="App">
      <Header />
      <History />
      <SearchHistory />
      <Rockets />
      <UpcomingCapsules/>
      <Missions/>
      <MissionsTable data={data}/>
    </div>
  );
}

export default App;
