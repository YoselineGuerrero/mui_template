import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import socials from '../images/socials.png';
import coming_soon from '../images/coming_soon.png';
import cards from '../images/cards_img.png';
import error_img_2 from '../images/error_img_2.png';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

const sections = [
  { title: 'Example 1', url: '/page1', image:cards, imageDes:'', topicDes:'Having multiple cards that show a preview of blogs.' },
  { title: 'Example 2', url: '/page2', image:coming_soon, imageDes:'', topicDes:'Check out a coming soon page.' },
  { title: 'Example 3', url: '/page3', image:socials, imageDes:'', topicDes:'Examples of social media icons and layouts.' },
  { title: 'Example 4', url: '/page', image:error_img_2, imageDes:'', topicDes:'See the 404 error page. If someone tries to go to a page that doesn\'t exist they will be redirect to this page.' },
];

export default function HomeCard() {
  return (
    <div>
      <Grid container justifyContent="center">
        {sections.map((sections) => (
          <Grid item xs={10} md={3.8} component={Card}  elevation='3' sx={{borderRadius: 5, padding:'10px', margin:'5px', display: "flex", flexDirection: "column", justifyContent: "space-between"}} >
            <CardMedia component="img" image={sections.image} sx={{ width: 125 , height:125, margin:'auto'}} />
            <CardContent>
              <Typography variant="h6" align="center">
                {sections.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {sections.topicDes}
              </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'flex-end'}}>
              <Button variant="contained" sx={{borderRadius: 5, marginBottom:'10px'}} href={sections.url}>Learn More</Button>
            </CardActions>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}