import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BlogFooter() {
  return (
    <div>
      <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
        <Button startIcon={<ArrowBackIcon />}  href='#'>
          Previous
        </Button>
        <Button endIcon={<ArrowForwardIcon />} href='#'>
          Next
        </Button>
      </Toolbar>
    </div>
  );
}
