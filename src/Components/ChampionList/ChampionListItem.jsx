import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Avatar,
  ListItemButton,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Tooltip,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChampionListItem({ champion, onClick }) {
  const squareImageAddress =
    'http://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/' +
    champion.id +
    '.png';

  const handleOnClick = () => {
    onClick(champion);
  };

  return (
    <Card className='ChampionList-item'>
      <CardActionArea onClick={handleOnClick}>
        <Tooltip title={champion.name} followCursor>
          <CardMedia
            component='img'
            height='60'
            image={squareImageAddress}
            alt={champion.name}
          />
        </Tooltip>
      </CardActionArea>
    </Card>
  );
}
