import React from 'react';

// components
import Header from 'components/HomePage/Header';
import { Container } from '@mui/material';
import Banner from 'components/HomePage/Banner'

// custom hook
import useTitle from 'hooks/useTitle';

const HomePage = () => {

    useTitle("TaskTod")

    return (
        <>
            <Header />    
            <Container component="main" maxWidth="xl">
                <Banner />
            </Container>
        </>
    );
}

export default HomePage;
