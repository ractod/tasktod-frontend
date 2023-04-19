import React from 'react';

// components
import { Typography, Box } from '@mui/material';
import TaskCard from './TaskCard';
import { CalendarMonth } from '@mui/icons-material';
import Title from 'components/common/Title';
import Empty from 'components/common/Empty';

// redux
import { useSelector } from 'react-redux';
import { filterTasks, findByDate, sortByTime } from 'utilities/functions';

const classNames = {
    section: "mt-10",
    cardsContainer: "mt-2",
    dateContainer: "mt-7 text-mute flex items-center gap-x-2",
    dateIcon: "text-[22px] md:text-[23px] lg:text-2xl",
    date: "text-sm md:text-[15px] lg:text-base drop-shadow-xl"
}

const TasksSection = ({ tasksFilters }) => {

    const { tasks, currentTaskDate: { day, month, year }, currentTaskDate } = useSelector(state => state.dataState)

    return (
        <section className={classNames.section}>
            <Title title="Tasks" />

            <Box className={classNames.dateContainer}>
                <CalendarMonth className={classNames.dateIcon} />
                <Typography className={classNames.date}>
                    {month}/{day}/{year}
                </Typography>
            </Box>

            {
                findByDate(tasks, currentTaskDate).length > 0 
                ?
                <Box className={classNames.cardsContainer}>
                   { sortByTime(filterTasks(tasksFilters, findByDate(tasks, currentTaskDate))).map(data => <TaskCard data={data} key={data._id} />) }
                </Box> 
                :
                <Empty />
            }

        </section>
    );
}

export default TasksSection;
