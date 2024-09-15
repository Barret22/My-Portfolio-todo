import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                О себе
            </Typography>
            <Typography variant="body1">
                Здесь будет информация о ваших навыках и опыте работы.
            </Typography>
        </Container>
    );
};

export default Home;
