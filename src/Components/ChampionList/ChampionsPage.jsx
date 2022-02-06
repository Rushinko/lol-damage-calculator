import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ChampionList from '.';
import { ALL_CHAMPIONS_URL } from '../../constants';

export default function ChampionsPage({ data }) {
  const navigate = useNavigate();

  const handleChampionClick = (champion) => {
    console.log(`YOU CLICKED ${champion.id} IN THE CHAMPIONS PAGE`);
    navigate(`../${champion.id}`);
  };

  return (
    <div>
      {data && <ChampionList data={data} onClick={handleChampionClick}></ChampionList>}
    </div>
  );
}
