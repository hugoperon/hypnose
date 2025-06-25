import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const [anchorElHypnose, setAnchorElHypnose] = useState(null);
  const [anchorElInfos, setAnchorElInfos] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuHypnose = (event) => {
    setAnchorElHypnose(event.currentTarget);
  };
  const handleCloseHypnose = () => {
    setAnchorElHypnose(null);
  };

  const handleMenuInfos = (event) => {
    setAnchorElInfos(event.currentTarget);
  };
  const handleCloseInfos = () => {
    setAnchorElInfos(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" elevation={2} sx={{ background: 'var(--white)', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)', borderBottom: '3px solid var(--primary-blue)' }}>
        <Toolbar>
          {/* Nom et sous-titre */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'var(--primary-blue)', fontWeight: 700, fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}>
              Cécile Vacher
            </Typography>
            <Typography variant="caption" component="div" sx={{ color: 'var(--primary-blue)', fontWeight: 700, fontFamily: 'Inter, Arial, sans-serif' }}>
              Praticienne en hypnose
            </Typography>
          </Box>

          {/* Menu burger sur mobile */}
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
                <Box sx={{ width: 260 }} role="presentation" onClick={handleDrawerClose}>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/">
                        <ListItemText primary="Accueil" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/quest-ce-que-l-hypnose">
                        <ListItemText primary="Qu'est-ce que l'hypnose" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/hypnose-pourquoi">
                        <ListItemText primary="L'hypnose pourquoi ?" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/comment-se-deroule-une-seance">
                        <ListItemText primary="Comment se déroule une séance" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/faq">
                        <ListItemText primary="FAQ" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/tarifs">
                        <ListItemText primary="Tarifs" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/contact">
                        <ListItemText primary="Contact" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/infos">
                        <ListItemText primary="Infos pratiques" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component={Link} to="/politique-confidentialite">
                        <ListItemText primary="Politique de confidentialité" />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <ListItemText primary="Prendre RDV" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              {/* Liens de navigation desktop */}
              <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, color: '#1565c0', '&:hover': { color: '#111' } }}>Accueil</Button>
              {/* Menu déroulant 'Tout sur l'hypnose' */}
              <Button
                color="inherit"
                onClick={handleMenuHypnose}
                sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, color: '#1565c0', '&:hover': { color: '#111' } }}
              >
                Tout sur l'hypnose
              </Button>
              <Menu
                anchorEl={anchorElHypnose}
                open={Boolean(anchorElHypnose)}
                onClose={handleCloseHypnose}
                PaperProps={{ sx: { mt: 1, borderRadius: 2, boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)' } }}
              >
                <MenuItem component={Link} to="/quest-ce-que-l-hypnose" onClick={handleCloseHypnose}>Qu'est-ce que l'hypnose</MenuItem>
                <MenuItem component={Link} to="/hypnose-pourquoi" onClick={handleCloseHypnose}>L'hypnose pourquoi ?</MenuItem>
                <MenuItem component={Link} to="/comment-se-deroule-une-seance" onClick={handleCloseHypnose}>Comment se déroule une séance</MenuItem>
                <MenuItem component={Link} to="/faq" onClick={handleCloseHypnose}>FAQ</MenuItem>
              </Menu>
              <Button color="inherit" component={Link} to="/tarifs" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, color: '#1565c0', '&:hover': { color: '#111' } }}>Tarifs</Button>
              <Button color="inherit" component={Link} to="/contact" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, color: '#1565c0', '&:hover': { color: '#111' } }}>Contact</Button>
              {/* Menu déroulant 'Infos pratiques' */}
              <Button
                color="inherit"
                onClick={handleMenuInfos}
                sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, color: '#1565c0', '&:hover': { color: '#111' } }}
              >
                Infos pratiques
              </Button>
              <Menu
                anchorEl={anchorElInfos}
                open={Boolean(anchorElInfos)}
                onClose={handleCloseInfos}
                PaperProps={{ sx: { mt: 1, borderRadius: 2, boxShadow: '0 4px 16px rgba(25, 118, 210, 0.08)' } }}
              >
                <MenuItem component={Link} to="/infos" onClick={handleCloseInfos}>Infos</MenuItem>
                <MenuItem component={Link} to="/politique-confidentialite" onClick={handleCloseInfos}>Politique de confidentialité</MenuItem>
              </Menu>
              <Button
                variant="contained"
                color="primary"
                component="a"
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  ml: 2,
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontFamily: 'Montserrat, Inter, Arial, sans-serif',
                  background: 'var(--primary-blue)',
                  transition: 'background 0.2s',
                  '&:hover': {
                    background: '#1565c0',
                  }
                }}
              >
                Prendre RDV
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
