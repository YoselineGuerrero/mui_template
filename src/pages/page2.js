import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardInfo from '../templates/card_info';
import comingSoonImage from '../images/soon_img.png'
import Box from '@mui/material/Box';

const POSTS = [];

export default function Page2(){
  return (
    <div style={{ height:'100vh'}} align="center">
      <Grid container >
        {POSTS.map((post) => (
          <CardInfo post={post}> </CardInfo>
        ))}
      </Grid>
      <Typography variant="h3" align="center" display="block">Coming Soon!</Typography>  
      <Box  sx={{ display: { xs: 'none', md: 'flex' } }} style={{ justifyContent:"center"}}> 
        <img src={comingSoonImage} alt="Coming Soon"/>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} style={{ justifyContent:"center"}}> 
        <img src={comingSoonImage} alt="comming soon" width={250} height={250}/>
      </Box>
    </div>
  );
}
