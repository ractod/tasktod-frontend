import React from 'react';

// component
import { Box, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const classNames = {
    container: "flex items-center gap-x-2 mt-1 p-1 text-red-dark",
    text: "font-semibold text-xs md:text-[13px] lg:text-sm",
}

const FormNotification = ({ text }) => {
    return (
        <Box className={classNames.container}>
            <ErrorOutline className={classNames.icon} />
            <Typography className={classNames.text}> { text } </Typography>
        </Box>
    );
}

export default FormNotification;
