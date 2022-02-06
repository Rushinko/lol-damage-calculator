import React, { useState } from 'react';
import axios from 'axios';
import { Stepper } from '@mui/material';
import ChampionList, { ChampionsPage } from '../ChampionList';

export default function CalculatorPage({ data }) {
  const handleChampionClick = () => {
    console.log('YOU CLICKED ME IN THE CALCULATOR PAGE');
  };

  return (
    <>
      <Stepper></Stepper>
      {data && <ChampionList data={data} onClick={handleChampionClick} />}
    </>
  );
}
