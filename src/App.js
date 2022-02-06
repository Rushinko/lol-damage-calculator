import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route, Outlet, Redirect } from 'react-router-dom';
import Topbar from './Components/Topbar';
import { ChampionsPage } from './Components/ChampionList';
import { CalculatorPage } from './Components/Calculator';
import ChampionDetails from './Components/ChampionDetails';
import { ALL_CHAMPIONS_URL } from './constants';

function App() {
  const [allChampionData, setAllChampionData] = useState(null);
  const [gameVersion, setGameVersion] = useState(null);

  const getChampionData = () => {
    axios.get(ALL_CHAMPIONS_URL).then((response) => {
      //console.log(response);
      setGameVersion(response.data.version);
      setAllChampionData(response.data.data);
    });
  };

  useEffect(() => {
    if (allChampionData === null) {
      getChampionData();
    }
  }, [allChampionData]);

  return (
    <div className='App'>
      <Topbar />
      <div className='App-content'>
        <Routes>
          <Route
            path='Champions'
            element={<ChampionsPage data={allChampionData} />}
          />
          <Route
            path='Calculator'
            element={<CalculatorPage data={allChampionData} />}
          />
          <Route path=':champId' element={<ChampionDetails />} />
        </Routes>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
