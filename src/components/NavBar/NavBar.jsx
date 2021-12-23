import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BackpackIcon from '@mui/icons-material/Backpack';

import { styled } from '@mui/material/styles';

const StyledBottomNav = styled(BottomNavigation)`
    position: absolute;
    bottom: 0;
    background-color: rgb(8, 162, 251);
`;

export default function NavBar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledBottomNav sx={{ width: 400 }} value={value} onChange={handleChange}>
      <Link to="/home">
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      </Link>
      <BottomNavigationAction
        label="Play"
        value="play"
        icon={<PlayCircleFilledWhiteIcon />}
      />
      <BottomNavigationAction
        label="Courses"
        value="courses"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction 
        label="Bags" 
        value="bags" 
        icon={<BackpackIcon />} />
    </StyledBottomNav>
  );
}