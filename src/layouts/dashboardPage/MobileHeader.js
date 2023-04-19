import React, { useState } from 'react';

// components
import { AppBar, Container, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import MobileMenu from './MobileMenu';

const classNames = {
    appBar: "sticky top-0 h-[70px] md:hidden bg-white shadow-md",
    container: "h-full flex items-center justify-between",
    title: "font-bold text-2xl text-primary"
}

const MobileHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <AppBar className={classNames.appBar}>
            
            <Container maxWidth="xl" className={classNames.container}>
                <Typography component="h1" className={classNames.title}> Dashboard </Typography>
                <IconButton color="primary" onClick={openMenu}>
                    <Menu />
                </IconButton>
            </Container>
        
            <MobileMenu isOpen={isMenuOpen} closeMenu={closeMenu} />

        </AppBar>
    );
}

export default MobileHeader;
