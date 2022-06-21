import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import RedditIcon from '@mui/icons-material/Reddit';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const socials = [
  {icon:GitHubIcon, title: 'Github', color: 'black', url: 'https://github.com/' },
  {icon:LinkedInIcon, title: 'LinkedIn', color: 'blue',  url: 'https://www.linkedin.com/' },
  {icon:EmailIcon, title: 'Email', color: 'black' },
  {icon:RedditIcon, title: 'Reddit', color: 'blue',  url: 'https://www.reddit.com/' },
  {icon:FacebookIcon, title: 'Facebook', color: 'black', url: 'https://facebook.com/' },
  {icon:InstagramIcon, title: 'Instagram', color: 'blue',  url: 'https://www.instagram.com/' },
  {icon:PinterestIcon, title: 'Pinterest', color: 'black', url: 'https://pinterest.com/' },
  {icon:TwitterIcon, title: 'Twitter', color: 'blue',  url: 'https://www.twitter.com/' },
  {icon:YouTubeIcon, title: 'Youtube', color: 'black', url: 'https://youtube.com/' },
];


export default function Page3() {
  return (
    <div>
      <Card elevation='3' sx={{ display: 'inline-block', position: "sticky", top: '30vh', left:'100vw'}} >
        <Grid rowSpacing={1} >
          {socials.map((socials) => (
            <Grid>
              <Tooltip title={socials.title}>
                <IconButton sx={{ "&:hover": { color: socials.color } }} target="_blank" href={socials.url} >
                  <socials.icon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Card>

      <div style={{ marginTop:'-450px', marginRight:'50px', marginLeft:'50px'}}  align="center">
        <Typography variant="h3">
          Social Media Page
        </Typography>
        <Typography gutterBottom>
          Have your socials displayed on the right side of the screen. Or have them displayed as seen below.
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography>
              Connect with us: 
            </Typography>
          </Grid>
          {socials.map((socials) => (
            <Grid item md={4} xs={6}>
              <IconButton sx={{ "&:hover": { color: socials.color } }} target="_blank" href={socials.url} >
                <socials.icon fontSize="large" />
              </IconButton>
              <Typography>
                {socials.title}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12} sx={{margin:'10px'}}>
            <Typography variant='h5'>Contact Form</Typography>
          </Grid>
          <Box component="form" sx={{ width: '100%' }}>
            <Grid item xs={12}  md={6}>
              <TextField fullWidth helperText="Please enter your name" label="Name" focused/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth helperText="Please enter your email" focused label="Email"  />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Message" multiline rows={8} focused  />
            </Grid>
            <Grid item xs={12} >
              <Button type="submit" variant="outlined" sx={{ marginTop:'15px'}} >
                Submit
              </Button>
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
}
