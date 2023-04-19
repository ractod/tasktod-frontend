import React  from 'react';

// components
import {  Box, Button, Typography, Link as MuiLink } from '@mui/material';
import { AccountCircleOutlined, LoginOutlined } from '@mui/icons-material';
import { Link as RouterLink , useLocation } from 'react-router-dom';

// image
import banner from "assets/image/authBanner.svg"
import logo from "assets/image/blueLogo.png"

const classNames = {
    section: "min-h-screen h-full flex",
    bannerContainer: "min-h-screen h-auto hidden lg:block basis-1/2 bg-primary rounded-r-[60px]",
    banner: "min-h-screen h-full w-full",
    logoContainer: "flex items-center gap-x-4",
    logo: "w-[60px]",
    formContainer: "min-h-screen basis-full lg:basis-1/2 flex flex-col items-center justify-center py-10 px-3 md:px-10 ",
    formTitle: "relative text-4xl font-bold text-primary after:content-[''] after:w-[70px] after:h-1 after:rounded-lg after:bg-primary after:absolute after:left-1 after:-bottom-1",
    formHeader: "flex flex-wrap justify-center gap-y-5 gap-x-5 mt-10",
    moodButton: "md:py-[7px] md:px-[21px]"
}

const Layout = ({ children }) => {

    const { pathname } = useLocation()

    return (
        <main className='min-h-screen h-full' >
            <section className={classNames.section}>
                
                <Box className={classNames.bannerContainer}>
                    <img src={banner} alt="auth banner" className={classNames.banner} />
                </Box>

                <Box className={classNames.formContainer}>

                    <Box className={classNames.logoContainer}>
                        <img src={logo} alt="logo" className={classNames.logo}/>
                        <Typography component="h1" className={classNames.formTitle}> Welcome! </Typography>
                    </Box>

                    <Box className={classNames.formHeader}>
                        <Button
                            linkcomponent={MuiLink}
                            component={RouterLink}
                            to="/auth/login"
                            className={classNames.moodButton}
                            variant={ pathname == "/auth/login" ? "contained": "outlined" }
                            endIcon={<LoginOutlined />}
                        > 
                            login 
                        </Button>
                        <Button
                            linkcomponent={MuiLink}
                            component={RouterLink}
                            to="/auth/register"
                            className={classNames.moodButton} 
                            variant={ pathname == "/auth/register" ? "contained": "outlined" }
                            endIcon={<AccountCircleOutlined />}
                        > 
                            register 
                        </Button>
                    </Box>

                    { children }
                </Box>

            </section>
        </main>
    );
}

export default Layout;
