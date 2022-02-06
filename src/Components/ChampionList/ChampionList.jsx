import { List } from '@mui/material';
import React from 'react';
import { ChampionListItem } from '.';
import './ChampionList.css';

export default function ChampionList({ data, onClick }) {
  const ChampionsArray = Object.values(data);
  return (
    <div className='ChampionList'>
      {ChampionsArray.map((champ) => {
        return (
          <ChampionListItem key={champ.id} champion={champ} onClick={onClick} />
        );
      })}
    </div>
  );
}

