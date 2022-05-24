import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function CardInfo({ post }) {
  return (
    <Grid item xs= {12} md={3.8} component={Card}  elevation='3' sx={{borderRadius: 2, margin:'10px', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <CardContent>
        <Typography variant="h6" >
          {post.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {post.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2"  color="text.secondary" sx={{ mb: 1.5, ml: 1.5 }}>
          Read Time: {post.read}
        </Typography>
        <Button variant="contained" sx={{borderRadius: 5, marginBottom:'5px', marginLeft: 'auto'}} href={post.link}>Read more</Button>
      </CardActions>      
    </Grid>
  );
}
