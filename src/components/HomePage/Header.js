import React, { useState } from 'react';

// components
import { AppBar, Box, Typography, List, ListItem, ListItemButton, Container, Link as MuiLink, ListItemIcon, ListItemText  } from '@mui/material';
import AccountMenu from './AccountMenu';

// images
import Logo from "assets/image/logo.png"
import { Link as RouterLink } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { Login, Person } from '@mui/icons-material';

const classNames = {
    appBar: "sticky top-0 text-primary bg-primary shadow-lg text-white",
    container: "h-[70px] flex justify-between items-center",
    logoContainer: "flex items-center gap-x-2",
    logo: "w-10 md:w-12",
    brandName: "font-bold text-xl md:text-2xl",
    list: "flex  items-center p-0 h-full",
    listItem: "p-0 h-full max-w-fit font-semibold text-[13px] md:text-sm lg:text-base",
    listItemButton: "h-full gap-x-3",
    listItemIcon: "min-w-fit text-white",
    link: "block h-full w-full"
}

const CustomListItem = ({ icon, text, href, onClick = null }) => (
    <ListItem className={classNames.listItem} onClick={onClick}>
        <ListItemButton 
            className={classNames.listItemButton} 
            // props for link Item
            {...href ? {linkcomponent: MuiLink, component: RouterLink, to: href } : {}} 
        >
            <ListItemIcon className={classNames.listItemIcon}>
                { icon }
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
)

const Header = () => {

    const authState = useSelector(state => state.authState)

    const [menuAnchor, setMenuAnchor] = useState(false)
    const isMenuOpen = !!menuAnchor

    const closeMenu = () => setMenuAnchor(null)
    const openMenu = (event) => setMenuAnchor(event.currentTarget)

    return (
        <AppBar className={classNames.appBar}>
            <Container maxWidth="xl" className={classNames.container}>
                <Box className={classNames.logoContainer}>
                    <img src={Logo} alt="Logo" className={classNames.logo}/>
                    <Typography component="span" className={classNames.brandName}> TaskTod </Typography>
                </Box>

                <List className={classNames.list}> 
                    {
                        // if user is logged in show the menu else show the login link
                        authState.user ? 
                        <>
                            <CustomListItem text="Account" icon={<Login />} onClick={openMenu} />
                            <AccountMenu open={isMenuOpen} anchor={menuAnchor} onClose={closeMenu} />
                        </> 
                        :
                        <CustomListItem text="Register" icon={<Person />} href="/auth/login" />
                    }

                </List>
            </Container>
        </AppBar>
    );
}

export default Header;
