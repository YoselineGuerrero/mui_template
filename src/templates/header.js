import React from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../App.js';
import { useTheme } from '@mui/material/styles';

const sections = [
  { title: 'Example 1', url: '/page1' },
  { title: 'Example 2', url: '/page2' },
  { title: 'Example 3', url: '/page3' },
];

export default function Header() {
  const [navMenu, setnavMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setnavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setnavMenu(null);
  };

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} onClickAway={handleCloseNavMenu}>
          <IconButton aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon fontSize="small"/>
          </IconButton>
          <Menu anchorEl={navMenu} open={Boolean(navMenu)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
            {sections.map((section) => (
              <MenuItem key={section.title} onClick={handleCloseNavMenu}>
                <Button textAlign="center" href={section.url}>{section.title}</Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography component="h2" variant="h5" color="inherit" align="center"  sx={{ flex: 1 }}>
          <Link href="/" underline="none">
            MUI Template
          </Link>
        </Typography>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <LightModeIcon fontSize="small"/> : <DarkModeIcon  fontSize="small"/>}
        </IconButton>
      </Toolbar>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto', display: { xs: 'none', md: 'flex' } }}>
        {sections.map((section) => (
          <Button variant="text" href={section.url}>
            {section.title}
          </Button>
        ))}
      </Toolbar>
    </div>
  );
}
