import React, { useEffect } from 'react';

// components
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider, Link as MuiLink } from '@mui/material';
import { CalendarMonth, Close, Groups, Home, Logout } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/actions';

const classNames = {
    menu: "w-10/12 h-screen bg-white flex flex-col rounded-r-3xl",
    menuHeader: "flex items-center justify-between px-4 py-3",
    menuTitle: "text-primary text-xl md:text-2xl font-bold",
    menuCloseButton: "text-2xl md:text-3xl",
    menuDivider: "border-primary",
    menuList: "flex flex-col px-4 py-3 basis-full",
    menuListItem: (active) => `py-5 rounded-2xl ${active ? "bg-primary bg-opacity-20 text-primary" : ""} `,
    menuListItemText: (active) => `${active ? "font-semibold" : ""} text-sm`,
    menuListItemIcon: "text-inherit",
    menuLogoutItem: "mt-auto py-5 rounded-2xl text-red-dark bg-red-light"
}

const MobileMenu = ({ isOpen, closeMenu }) => {

    const { pathname } = useLocation()
    const dispatch = useDispatch()

    // when user is navigated with following links close the menu
    useEffect(() => { closeMenu() }, [pathname])

    return (
        <Drawer open={isOpen} PaperProps={{ className: classNames.menu }} >

            <Box className={classNames.menuHeader}>
                <Typography className={classNames.menuTitle}> Menu </Typography>
                <IconButton color="primary" onClick={closeMenu}>
                    <Close className={classNames.menuCloseButton} />
                </IconButton>
            </Box>

            <Divider className={classNames.menuDivider} />

            <List className={classNames.menuList}>

                <ListItem 
                    linkcomponent={MuiLink} 
                    component={RouterLink} 
                    to="/" 
                    className={classNames.menuListItem()}
                >
                    <ListItemIcon className={classNames.menuListItemIcon}>
                        <Home />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{ className: classNames.menuListItemText() }} 
                        primary="Home"
                    />
                </ListItem>

                <ListItem 
                    linkcomponent={MuiLink} 
                    component={RouterLink} 
                    to="/dashboard/schedule" 
                    className={classNames.menuListItem(pathname == "/dashboard/schedule")}
                >
                    <ListItemIcon className={classNames.menuListItemIcon}>
                        <CalendarMonth />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{ className: classNames.menuListItemText(pathname == "/dashboard/schedule") }} 
                        primary="Schedule"
                    />
                </ListItem>

                <ListItem 
                    linkcomponent={MuiLink} 
                    component={RouterLink} 
                    to="/dashboard/meeting" 
                    className={classNames.menuListItem(pathname == "/dashboard/meeting")}
                >
                    <ListItemIcon className={classNames.menuListItemIcon}>
                        <Groups />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{ className: classNames.menuListItemText(pathname == "/dashboard/meeting") }} 
                        primary="Meetings"
                    />
                </ListItem>

                <ListItem className={classNames.menuLogoutItem} onClick={() => dispatch(logout())}>
                    <ListItemIcon className={classNames.menuListItemIcon}>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{ className: classNames.menuListItemText() }} 
                        primary="Logout"
                    />
                </ListItem>
            </List>

        </Drawer>
    );
}

export default MobileMenu;
