import React from 'react';

// component
import { Button, Box, Container, Typography,Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// image
import empty from "assets/image/error.svg"

const classNames = {
    container: "h-screen flex flex-col md:flex-row justify-center md:justify-between items-center gap-10",
    image: "w-[500px]",
    textConatiner: "flex flex-col items-center",
    alert: "items-center shadow-lg",
    title: "font-bold text-black text-5xl md:text-6xl lg:text-7xl",
    message: "font-semibold text-base md:text-lg lg:text-xl m-0",
    description: "text-mute text-center mt-1 mb-7",
}

const ErrorPage = () => {
    return (
        <Container maxWidth="xl" component="main" className={classNames.container} >
            <img src={empty} alt="empty box" className={classNames.image} />
            
            <Box className={classNames.textConatiner}>
                <Typography className={classNames.title}> ERROR </Typography>
                <Typography className={classNames.description}>
                    Sorry To Say That But Something In Client Or Server Wen Wrong To Fixe That
                    Refresh The Page Or Come Back Later
                </Typography>
                <Button variant='contained' linkcomponent={MuiLink} component={RouterLink} to="/"> Back To Home </Button>
            </Box>
        </Container>
    );
}

export default ErrorPage;
