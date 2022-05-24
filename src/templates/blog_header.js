import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ShareIcon from '@mui/icons-material/Share';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function BlogHeader({ blog }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(blog.link)
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Typography align="center" variant= 'h4' sx={{margin: "auto"}}>  
        {blog.title}
      </Typography>

      <Grid container justifyContent="center">
        <CalendarTodayIcon fontSize="small" color="disabled" sx={{marginRight: "5px"}}/>
        <Typography align="center" color="text.secondary" sx={{marginRight: "15px"}}> 
          Date: {blog.date}
        </Typography>
        <ScheduleIcon fontSize="small" color="disabled" sx={{marginRight: "5px"}}/>
        <Typography align="center" color="text.secondary">
          Read time: {blog.time}
        </Typography>
      </Grid>
      
      <Grid container justifyContent="center" sx={{marginBottom: "10px"}}> 
        <IconButton sx={{ "&:hover": { color: 'indigo' } }}  target="_blank" href={'https://www.facebook.com/sharer.php?u='+blog.link}>
          <FacebookIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ "&:hover": { color: 'lightBlue' } }}  target="_blank" href={'https://twitter.com/share?url='+blog.link+'&text='+blog.title+'&via=[via]&hashtags=[hashtags]'}>
          <TwitterIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ "&:hover": { color: 'blue' } }}  target="_blank" href={'https://www.linkedin.com/shareArticle?url='+blog.link+'&title='+blog.title}>
          <LinkedInIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ "&:hover": { color: 'red' } }} target="_blank" href={'https://reddit.com/submit?url='+blog.link+'&title='+blog.title}>
          <RedditIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ "&:hover": { color: 'black' } }}  onClick={handleClick}>
          <ShareIcon fontSize="small" />
        </IconButton>
        <IconButton sx={{ "&:hover": { color: 'teal' } }}  onClick={() => window.print()}>
          <PrintIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          The link to this blog has been saved to your clipboard.
        </Alert>
      </Snackbar>
    </div>
  );
}