import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{
            minHeight: "2", flexGrow: 1, textAlign: "center", fontWeight: "bold"
          }}>
            Lšk up ćÉćØć
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
