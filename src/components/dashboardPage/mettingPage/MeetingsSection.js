import React from "react";

// components
import { Box, Typography } from "@mui/material";
import { CalendarMonth, Groups } from "@mui/icons-material";
import MeetingCard from "./MeetingCard";
import Empty from "components/common/Empty";

// redux
import { useSelector } from "react-redux";
import { findByDate, sortByTime } from "utilities/functions";

const classNames = {
    section: "w-full xl:basis-2/3 sm:pb-3 sm:px-5",
    header: "mb-3 flex items-center justify-between",
    headerTextContainer: "text-mute flex items-center gap-x-2",
    headerTextIcon: "text-[22px] md:text-[23px] lg:text-2xl",
    headerText: "text-sm md:text-[15px] lg:text-base drop-shadow-lg",
};

const MeetingsSection = () => {
    const { meetings, currentMeetingDate: { day, month, year }, currentMeetingDate, } = useSelector((state) => state.dataState);

    return (
        <section className={classNames.section}>
            <Box className={classNames.header}>
                <Box className={classNames.headerTextContainer}>
                    <CalendarMonth className={classNames.headerTextIcon} />
                    <Typography className={classNames.headerText}>
                        {month}/{day}/{year}
                    </Typography>
                </Box>

                <Box className={classNames.headerTextContainer}>
                    <Groups className={classNames.headerTextIcon} />
                    <Typography className={classNames.headerText}>
                        {findByDate(meetings, currentMeetingDate).length} Meetings
                    </Typography>
                </Box>
            </Box>

            {/* cards part */}
            {
                findByDate(meetings, currentMeetingDate).length > 0 
                ? 
                <Box>
                    {sortByTime(findByDate(meetings, currentMeetingDate)).map((data) => <MeetingCard data={data} key={data._id} /> )}
                </Box>
                : <Empty />
            }
        </section>
    );
};

export default MeetingsSection;
