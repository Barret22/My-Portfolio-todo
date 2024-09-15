import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Contacts = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Виктор Клюев
            </Typography>
            <Typography variant="body1">
                место проживания: Польша
                телефон: + 48 575...639
                Email: vviktor....@gmail.com
            </Typography>
        </Container>
    );
};

export default Contacts;