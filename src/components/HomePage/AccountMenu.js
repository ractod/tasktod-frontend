import React from 'react';

// components
import { Avatar, Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import { CalendarMonth, Groups, LogoutOutlined, } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/actions';

const classNames = {
    menu: "w-[250px] py-4 px-3 bg-white shadow-md rounded-lg",
    header: "flex items-center gap-x-4",
    username: "font-semibold text-black text-[15px] md:text-base lg:text-[17px]",
    email: "text-mute text-xs md:text-[13px] lg:text-sm",
    divider: "my-3 border-primary",
    menuItem: "rounded-md p-0",
    menuItemLink: "w-full flex items-center py-3 px-4 text-mute hover:text-primary",
    listItemIcon: "font-semibold text-inherit",
    listItemText: "font-semibold text-inherit text-sm md:text-[15px] lg:text-base",
    menuLogoutItem: "rounded-md py-3 text-mute hover:text-red-dark",
}

const AccountMenu = ({ open, anchor, onClose }) => {

    const dispatch = useDispatch()
    const { user: { name, lastName, email } } = useSelector(state => state.authState)

    return (
        <Menu 
            open={open} 
            anchorEl={anchor} 
            onClose={onClose} 
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            PaperProps={{ className: classNames.menu }}
        >
            {/* header */}
            <Box className={classNames.header}>
                <Avatar> { name[0] } </Avatar>
                <Box>
                    <Typography className={classNames.username}> { name } { lastName } </Typography>
                    <Typography className={classNames.email}> { email } </Typography>
                </Box>
            </Box>

            <Divider className={classNames.divider} />

            {/* options */}
            <MenuItem className={classNames.menuItem}>
                <Link to="/dashboard/schedule" className={classNames.menuItemLink}>
                    <ListItemIcon className={classNames.listItemIcon}>
                        <CalendarMonth />
                    </ListItemIcon>
                    <ListItemText primary="Schedule" primaryTypographyProps={{ className: classNames.listItemText }} />
                </Link>
            </MenuItem>

            <MenuItem className={classNames.menuItem}>
                <Link to="/dashboard/meeting" className={classNames.menuItemLink}>
                    <ListItemIcon className={classNames.listItemIcon}>
                        <Groups />
                    </ListItemIcon>
                    <ListItemText primary="Meetings" primaryTypographyProps={{ className: classNames.listItemText }} />
                </Link>
            </MenuItem>

            <MenuItem className={classNames.menuLogoutItem} onClick={() => dispatch(logout())}>
                <ListItemIcon className={classNames.listItemIcon}>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Log Out" primaryTypographyProps={{ className: classNames.listItemText }} />
            </MenuItem>
        </Menu>
    );
}

export default AccountMenu;
