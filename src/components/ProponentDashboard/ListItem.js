import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Progress from './Progress';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PersonSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Personal Details" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CachedSharpIcon />
      </ListItemIcon>
      <ListItemText primary="Progress" onClick={<Progress />} />
    </ListItemButton>
   
    
  </React.Fragment>
);

