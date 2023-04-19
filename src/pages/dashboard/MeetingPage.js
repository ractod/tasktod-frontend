import React from 'react';

// components
import { Container } from '@mui/material';
import MeetingsSection from 'components/dashboardPage/mettingPage/MeetingsSection';
import OptionsSection from 'components/dashboardPage/mettingPage/OptionsSection';
import { ScrollRestoration } from 'react-router-dom';

const classNames = {
    main: "min-h-screen py-6 flex flex-col-reverse xl:flex-row justify-end gap-y-10 xl:gap-x-10"
}

const MeetingPage = () => {
    return (
        <Container maxWidth='xl' component="main" className={classNames.main}>
            <MeetingsSection />
            <OptionsSection />
        </Container>
    );
}

export default MeetingPage;
