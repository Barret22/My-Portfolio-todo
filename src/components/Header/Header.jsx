import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';
import Container from '@mui/material/Container';

const Header = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Portfolio
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/todo">TODO</Button>
                    <Button color="inherit" component={Link} to="/swapi">SWAPI</Button>
                    <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
                    <Button color="inherit" onClick={toggleTheme}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

