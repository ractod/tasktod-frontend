import React from 'react';

// components
import { Add, AllInclusive, Assignment, Bed, CheckCircle, Close } from '@mui/icons-material';
import { FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select } from '@mui/material';

const classNames = {
    filterItemIcon: (textColor) => textColor,
};

const FilterInput = ({ value, onChange, className = "" }) => {
    return (
        <FormControl className={className}>
            <InputLabel> Filter </InputLabel>
            <Select 
                renderValue={(value) => value}
                value={value} onChange={onChange}
                name="tag" label="Filter" IconComponent={Add} className={className} 
            >
                <MenuItem value="all">
                    <ListItemIcon className={classNames.filterItemIcon("text-primary")}> <AllInclusive /> </ListItemIcon>
                    <ListItemText primary="All" />
                </MenuItem>
                <MenuItem value="resting">
                    <ListItemIcon className={classNames.filterItemIcon("text-purple-dark")}> <Bed /> </ListItemIcon>
                    <ListItemText primary="Resting" />
                </MenuItem>
                <MenuItem value="activity">
                    <ListItemIcon className={classNames.filterItemIcon("text-yellow-dark")}> <Assignment /> </ListItemIcon>
                    <ListItemText primary="Activity" />
                </MenuItem>
                <MenuItem value="completed">
                    <ListItemIcon className={classNames.filterItemIcon("text-green-dark")}> <CheckCircle /> </ListItemIcon>
                    <ListItemText primary="Completed" />
                </MenuItem>
                <MenuItem value="uncompleted">
                    <ListItemIcon className={classNames.filterItemIcon("text-red-dark")}> <Close /> </ListItemIcon>
                    <ListItemText primary="Uncompleted" />
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterInput;
