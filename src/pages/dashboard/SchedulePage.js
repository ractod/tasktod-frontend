import React, { useState } from 'react';

// components
import OptionsSection from 'components/dashboardPage/schedulePage/OptionsSection';
import OverviewSection from 'components/dashboardPage/schedulePage/OverviewSection';
import TasksSection from 'components/dashboardPage/schedulePage/TasksSection';
import { Container } from '@mui/material';

const classNames = { main: "py-6" }

const SchedulePage = () => {

    // lifting up the inputs values in OptionsSection to pass to TasksSection
    const [tasksFilters, setTasksFilters] = useState({ name: "", tag: "all" })
    const setFilters = (event) => setTasksFilters(prevState => ({
        ...prevState, 
        [event.target.name]: event.target.value,
    }))

    return (
        <Container maxWidth="xl" component="main" className={classNames.main}>
            <OptionsSection {...{tasksFilters, setFilters}} />
            <OverviewSection />
            <TasksSection tasksFilters={tasksFilters}/>
        </Container>
    );
}

export default SchedulePage;
