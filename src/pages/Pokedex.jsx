import React, { useEffect } from "react";
import { Chip, Container, Divider, Paper, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokedexImage from "../assets/pokedex.png"


export const Pokedex = ({ pokemonData }) => {
    const { name, sprites, stats } = pokemonData || {};
    const navigate = useNavigate()
  
    if (!pokemonData) {
      navigate("/")
    }

    useEffect(() => {
        if (!pokemonData) {
          navigate("/");
        }
      }, []);
  
    return (
      <>
      <Navbar hideSearch hidePokedex/>
        <Container maxWidth="md">
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" p={5} 
            >
                <Box 
                    component="img" 
                    src={sprites.other.showdown.front_default} 
                    width="80px" 
                    position="absolute"
                    top="20em"
                />
                <Box component="img" src={PokedexImage} maxWidth="375px"/>
                <Typography 
                    variant="h4"
                    fontWeight="600"
                    color="#aaa"
                    position="absolute"
                    top="12.9em"
                >
                    {name}
                </Typography>
                <Container>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color="#fff"
                    position="absolute"
                    top="21em"
                    left="50%"
                   >
                    HP: {stats[0].base_stat}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color="#fff"
                    position="absolute"
                    top="22.5em"
                    left="50%"
                   >
                    Ataque: {stats[1].base_stat}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color="#fff"
                    position="absolute"
                    top="24em"
                    left="50%"
                   >
                    Defesa: {stats[2].base_stat}
                  </Typography>
                </Container>
            </Box>
        </Container>
    </>
    );
  };