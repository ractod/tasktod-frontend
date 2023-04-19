import React from 'react';

// component
import { Button, Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// image
import empty from "assets/image/404.svg"

const classNames = {
    container: "h-screen flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-5 gap-x-10",
    image: "w-[400px] md:w-[500px]",
    textConatiner: "flex flex-col items-center",
    alert: "items-center shadow-lg",
    title: "font-bold text-black text-5xl md:text-6xl lg:text-7xl",
    description: "text-mute text-center mt-1 mb-7",
}

const NotFound = () => {
    return (
        <Container maxWidth="xl" component="main" className={classNames.container} >
            <img src={empty} alt="empty box" className={classNames.image} />
            
            <Box className={classNames.textConatiner}>
                <Typography className={classNames.title}> 404 </Typography>
                <Typography className={classNames.description}>
                    Sorry To Say That But The Page You Are Looking For 
                    Doesn't Exist. Check The Url And Try Again
                </Typography>
                <Button variant='contained' linkcomponent={MuiLink} component={RouterLink} to="/"> Back To Home </Button>
            </Box>
        </Container>
    );
}

export default NotFound;
