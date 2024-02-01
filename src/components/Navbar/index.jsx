import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoPokemon from './assetsNavbar/pokemon-logo.png'
import { useNavigate } from "react-router-dom";
import LogoPokedex from "../../assets/pokeball.ico";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ pokemonFilter, hideSearch, hidePokedex}) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"2em" }}>
      <AppBar position="static" sx={{backgroundColor:"red"}}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Box component="img" src={LogoPokemon} height="3em" sx={{cursor: "pointer"}} onClick={()=> navigate("/")}/>
            {hidePokedex && (
              <Box component="img" src={LogoPokedex} height="3em" sx={{cursor: "pointer"}} onClick={()=> navigate("/pokedex")}/>
            )}
              {!hideSearch && (
                <Search onChange={(e) => pokemonFilter(e.target.value)}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Pesquise..." inputProps={{ "aria-label": "search" }} />
                </Search>
              )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
