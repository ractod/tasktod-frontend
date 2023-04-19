import React from 'react';

// component
import { Divider, Typography } from '@mui/material';

const classNames = {
    divider: "after:border-secondary after:w-[99%] before:border-secondary before:w-[1%] ",
    title: "font-semibold text-base md:text-[17px] lg:text-lg text-secondary",
}

const Title = ({ title, className = "" }) => {
    return (
        <Divider textAlign="left" className={classNames.divider + className }>
            <Typography className={classNames.title}> { title } </Typography>
        </Divider>
    );
}

export default Title;
