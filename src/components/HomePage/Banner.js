import React from 'react';

// components
import { Button, Typography, Box, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

// image
import banner from "assets/image/banner.svg"

const classNames = {
    section: "min-h-[calc(100vh-70px)] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-x-5  py-5",
    banner: "w-[80%] sm:w-[60%] md:w-[45%] drop-shadow-xl",
    contentContainer: "min-w-fit text-center md:text-left",
    title: "font-black text-black text-3xl sm:text-4xl lg:text-5xl drop-shadow-xl",
    description: "mt-6 text-mute text-base sm:text-[15px] lg:text-lg drop-shadow-xl",
    buttonsContainer: "mt-4 flex items-center justify-center md:justify-start gap-x-3",
    button: "rounded-full shadow-xl",
}

const Banner = () => {
    return (
        <section className={classNames.section}>
            <Box className={classNames.contentContainer}>
                <Typography component="h1" className={classNames.title}>
                    Now Start Planing <br/> On  Your Own 
                </Typography>
                <Typography className={classNames.description}>
                    We Are Here To Set Your Daily Schedule <br/> 
                    And Help You To Get Better 
                </Typography>
                <Box className={classNames.buttonsContainer}>
                    <Button linkcomponent={MuiLink} component={RouterLink} to="/dashboard/schedule" size="large" variant="contained"  className={classNames.button}> Discover </Button>
                    <Button linkcomponent={MuiLink} component={RouterLink} to="/auth/register" size="large" variant="outlined"  className={classNames.button}> Signup </Button>
                </Box>
            </Box>

            <img src={banner} alt="banner" className={classNames.banner} />
        </section>
    );
}

export default Banner;
