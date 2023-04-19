import React from 'react';

// components
import { Typography, Grid, Box } from '@mui/material';
import { Assignment, Bed, CheckCircle, Close } from '@mui/icons-material';
import Title from 'components/common/Title';

// redux
import { useSelector } from 'react-redux';
import { findByDate } from 'utilities/functions';

const classNames = {
    section: "mt-10",
    statisticsContainer: "mt-5",
    statistic: (bgColor) => `h-[80px] rounded-md flex items-center gap-x-7 px-5 py-4 ${bgColor} shadow-lg`,
    listItemTextPrimary: (textColor) => `${textColor} font-medium text-base md:text-[17px] lg:text-lg`,
    listItemTextSecondary: (textColor) => `${textColor} font-medium text-xs md:text-[13px] lg:text-sm`,
    listItemIcon: (textColor) => textColor
}

const Statistic = ({ primaryText, secondaryText, Icon, textColor, bgColor }) => (
    <Grid component="li" item xs={12} sm={6} xl={3}>
        <Box className={classNames.statistic(bgColor)}>
            <Icon className={classNames.listItemIcon(textColor)} />
            <Box>
                <Typography className={classNames.listItemTextPrimary(textColor)}> { primaryText } </Typography>
                <Typography className={classNames.listItemTextSecondary(textColor)}> { secondaryText } </Typography>
            </Box>
        </Box>
    </Grid>
)

const OverviewSection = () => {

    const { tasks, currentTaskDate } = useSelector(state => state.dataState)

    const filteredTasks = findByDate(tasks, currentTaskDate)
    const findTags = (tagName) => filteredTasks.filter(task => task.tags.includes(tagName)).length

    return (
        <section className={classNames.section}>
            <Title title="Overview" />
            <Grid component="ul" container spacing={1} className={classNames.statisticsContainer}>
                <Statistic primaryText={filteredTasks.length} secondaryText="ToTal Tasks" Icon={Assignment} textColor="text-white" bgColor="bg-primary" />
                <Statistic primaryText={findTags("resting")} secondaryText="ToTal Resting" Icon={Bed} textColor="text-primary" bgColor="bg-white" />
                <Statistic primaryText={findTags("completed")} secondaryText="ToTal Completed" Icon={CheckCircle} textColor="text-white" bgColor="bg-primary" />
                <Statistic primaryText={findTags("uncompleted")} secondaryText="Total Uncompleted" Icon={Close} textColor="text-primary" bgColor="bg-white" />
            </Grid>
        </section>
    );
}

export default OverviewSection;
