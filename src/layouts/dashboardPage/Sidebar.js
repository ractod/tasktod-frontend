import React, { useState } from 'react';

// components
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography, ListItemButton } from '@mui/material';
import {  CalendarMonth, East, Groups, Logout } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

// image
import logo from "assets/image/blueLogo.png"

// redux
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/actions';

const classNames = {
    aside: (open) => `
        rounded-r-[40px] hidden md:flex group 
        ${open ? "open min-w-[250px] w-[250px]" : "min-w-[90px] w-[90px]"}
        sticky top-0 h-screen sticky flex flex-col p-5 shadow-lg bg-white duration-150 ease overflow-x-hidden 
    `,
    header: "min-w-[50px] flex items-center justify-center group-[.open]:justify-between",
    asideButton: "group-[.open]:rotate-180 duration-150 ease transition-transform",
    brandContainer: "hidden group-[.open]:flex items-center",
    brandName: "font-bold text-primary text-xl",
    logo: "w-10",
    list: "flex flex-col basis-full mt-5",
    listItem: "p-0 mt-4 first:mt-0",
    logoutItem: "flex h-[50px] p-0 mt-auto rounded-xl cursor-pointer hover:text-red-dark hover:bg-red-light duration-150",
    listItemLink: (active) => `
        flex items-center justify-start w-full
        h-[50px] min-w-[50px] p-0 mt-4 text-black rounded-xl first:mt-0 
        ${active ? "bg-primary bg-opacity-20 text-primary" : ""} 
        hover:text-primary duration-150 ease cursor-pointer
    `,
    listItemText: (active) => `${active ? "font-semibold" : ""} transition-[opacity] duration-150 ease opacity-0 group-[.open]:opacity-100`,
    listItemIcon: "flex justify-center min-w-[50px] text-center text-inherit",
}

const Sidebar = () => {

    const dispatch = useDispatch()
    const { pathname } = useLocation()
    
    const [open, setOpen] = useState(true)

    return (
        <aside className={classNames.aside(open)}>

            <Box className={classNames.header}>
                <Link to="/" className={classNames.brandContainer}>
                    <img src={logo} alt="logo" className={classNames.logo} />
                    <Typography component="h2" className={classNames.brandName}> taskTod </Typography>
                </Link>
                <IconButton className={classNames.asideButton} color="primary" onClick={() => setOpen(prevState => !prevState)}>
                    <East />
                </IconButton>
            </Box>

            <List className={classNames.list}>
                <ListItem className={classNames.listItem} >
                    <Link to="/dashboard/schedule" className={classNames.listItemLink(pathname == "/dashboard/schedule")}>
                        <ListItemIcon className={classNames.listItemIcon}>
                            <CalendarMonth />
                        </ListItemIcon>
                        <ListItemText primary="Schedule" primaryTypographyProps={{ className: classNames.listItemText(pathname == "/dashboard/schedule") }} />  
                    </Link>
                </ListItem>

                <ListItem className={classNames.listItem} >
                    <Link to="/dashboard/meeting" className={classNames.listItemLink(pathname == "/dashboard/meeting")} >
                        <ListItemIcon className={classNames.listItemIcon}>
                            <Groups />
                        </ListItemIcon>
                        <ListItemText primary="Meetings" primaryTypographyProps={{ className: classNames.listItemText(pathname == "/dashboard/meeting") }}  />  
                    </Link>
                </ListItem>

                <ListItem className={classNames.logoutItem} onClick={() => dispatch(logout())}>
                    <ListItemIcon className={classNames.listItemIcon}>
                        <Logout />
                    </ListItemIcon>
                    <ListItemText primary="Logout" primaryTypographyProps={{ className: classNames.listItemText() }} />  
                </ListItem>
            </List>
            
        </aside>
    );
}

export default Sidebar;
