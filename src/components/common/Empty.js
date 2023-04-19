import React from 'react';

// component
import { Box, Typography } from '@mui/material';

// images 
import emptyImg from "assets/image/empty.svg"

const classNames = {
    image: "w-full md:w-[400px] mx-auto drop-shadow-xl",
    text: "font-bold text-center text-mute text-xl md:text-2xl lg:text-3xl"
}

const Empty = () => {
    return (
        <Box className={classNames.container}>
            <img src={emptyImg} alt="empty" className={classNames.image} />
            <Typography className={classNames.text}>
                You Have Nothing Today
            </Typography>
        </Box>
    );
}

export default Empty;
