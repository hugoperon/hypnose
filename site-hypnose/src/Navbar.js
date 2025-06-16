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

export default function Navbar() {
  const [anchorElHypnose, setAnchorElHypnose] = useState(null);
  const [anchorElInfos, setAnchorElInfos] = useState(null);

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" elevation={2} sx={{ background: 'var(--white)', boxShadow: '0 2px 12px rgba(25, 118, 210, 0.07)' }}>
        <Toolbar>
          {/* Nom et sous-titre */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ color: 'var(--primary-blue)', fontWeight: 700, fontFamily: 'Montserrat, Inter, Arial, sans-serif' }}>
              Cécile Vacher
            </Typography>
            <Typography variant="caption" component="div" sx={{ color: 'var(--dark-blue)', fontFamily: 'Inter, Arial, sans-serif' }}>
              Thérapies brèves
            </Typography>
          </Box>

          {/* Liens de navigation */}
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, '&:hover': { color: 'var(--light-blue)' } }}>Accueil</Button>
          {/* Menu déroulant 'Tout sur l'hypnose' */}
          <Button
            color="inherit"
            onClick={handleMenuHypnose}
            sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, '&:hover': { color: 'var(--light-blue)' } }}
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
          <Button color="inherit" component={Link} to="/tarifs" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, '&:hover': { color: 'var(--light-blue)' } }}>Tarifs</Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, '&:hover': { color: 'var(--light-blue)' } }}>Contact</Button>
          {/* Menu déroulant 'Infos pratiques' */}
          <Button
            color="inherit"
            onClick={handleMenuInfos}
            sx={{ fontWeight: 500, fontFamily: 'Inter, Arial, sans-serif', mx: 1, '&:hover': { color: 'var(--light-blue)' } }}
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
            component={Link}
            to="#"
            sx={{ ml: 2, borderRadius: '24px', fontWeight: 700, fontFamily: 'Montserrat, Inter, Arial, sans-serif', background: 'var(--primary-blue)', '&:hover': { background: 'var(--dark-blue)' } }}
          >
            Prendre RDV
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
