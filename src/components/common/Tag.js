import React from 'react';

// components
import { Chip } from '@mui/material';

// constants
import tagTypes from 'constants/tagTypes';

const classNames = {
    tag: (textColor, bgColor, active) => `
        ${textColor} ${bgColor} ${active ? "border-solid border-2" : ""} 
        text-xs md:text-[13px] lg:text-sm
    `,
    tagIcon: "text-lg md:text-xl lg:text-2xl",
}

const Tag = ({ type , active = false, ...props }) => {

    const Icon = tagTypes[type].Icon

    return (
        <Chip 
            variant='filled' 
            icon={<Icon color="inherit" className={classNames.tagIcon} />} 
            label={tagTypes[type].label} 
            className={classNames.tag(tagTypes[type].textColor, tagTypes[type].bgColor, active) }
            {...props}
        />
    );
}

export default Tag;
