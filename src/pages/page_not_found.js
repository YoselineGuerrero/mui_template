import React from 'react';
import image404 from '../images/error_img.png'
import Box from '@mui/material/Box';

export default function PageNotFound() {
  return (
    <div style={{ height:'100vh'}} align="center">
      <h1>Page was not found!</h1>
      <Box  sx={{ display: { xs: 'none', md: 'flex' } }} style={{ justifyContent:"center"}}> 
        <img src={image404} alt="404 error page"/>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} style={{ justifyContent:"center"}}> 
        <img src={image404} alt="404 error page" width={250} height={250}/>
      </Box>
    </div>
  );
}