import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress, Paper, Typography } from '@mui/material';
import { SPLASH_URL, CHAPMION_URL } from '../../constants';

export default function ChampionDetails() {
  const { champId } = useParams();
  const formattedID = null;
  const [championData, setChampionData] = useState(null);

  const getChampionDetails = () => {
    axios.get(CHAPMION_URL + champId + '.json').then((response) => {
      console.log(
        Object.getOwnPropertyDescriptor(response.data.data, champId).value
      );
      setChampionData(
        Object.getOwnPropertyDescriptor(response.data.data, champId).value
      );
    });
  };

  useEffect(() => {
    if (championData === null) getChampionDetails();
  }, [championData]);

  return (
    <>
      {championData === null ? (
        <CircularProgress />
      ) : (
        <>
          <Paper
            style={{
              width: '90%',
              maxWidth: 1215,
              margin: 'auto',
              padding: '32px 16px',
            }}
          >
            <img
              width='95%'
              src={SPLASH_URL + champId + '_0.jpg'}
              style={{ maxWidth: 1215 }}
            />
            <Typography variant='h4'>{championData.name}</Typography>
          </Paper>
        </>
      )}
    </>
  );
}
