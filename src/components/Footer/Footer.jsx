import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                телефон: + 48 575...639
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                Email: vviktor....@gmail.com
            </Typography>
        </Box>
    );
};

export default Footer;

