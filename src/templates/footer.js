import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
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

export default function Footer() {
	return (
		<div align="center">
			<Paper square elevation='3'>
				<Grid container justifyContent="center">
					{socials.map((socials) => (
				    <Grid item >
					    <Tooltip title={socials.title}>
							  <IconButton sx={{ "&:hover": { color: socials.color } }} target="_blank" href={socials.url} >
									<socials.icon  />
							  </IconButton>
						  </Tooltip>
					  </Grid>
					))}
				</Grid>
				<Typography variant="body2" color="text.secondary" sx={{paddingBottom:'10px'}}>
					{'Copyright © MUI Template 2022'}
				</Typography>
			</Paper>
		</div>
	);
}