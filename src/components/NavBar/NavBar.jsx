import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom';

import './NavBar.css';

import HomeIcon from '@mui/icons-material/Home';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BackpackIcon from '@mui/icons-material/Backpack';

import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// quick style for the navBar
const StyledBottomNav = styled(BottomNavigation)`
    position: fixed;
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
      {/* link all of these buttons to their routes */}
      <Link to="/home">
        {/* Home nav button */}
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon sx={{ color: grey[50] }}/>}
        className="icons"
      />
      </Link>

      <Link to="/start">
        {/* Play nav button */}
      <BottomNavigationAction
        label="Play"
        value="play"
        icon={<PlayCircleFilledWhiteIcon sx={{ color: grey[50] }}/>}
        className="icons"
      />
      </Link>

      <Link to="/courses">
        {/* Courses nav button */}
      <BottomNavigationAction
        label="Courses"
        value="courses"
        icon={<LocationOnIcon sx={{ color: grey[50] }}/>}
        className="icons"
      />
      </Link>

      <Link to="/bags">
        {/* Bags nav button */}
      <BottomNavigationAction 
        label="Bags" 
        value="bags" 
        icon={<BackpackIcon sx={{ color: grey[50] }}/>}
        className="icons" 
      />
      </Link>
    </StyledBottomNav>
  );
}