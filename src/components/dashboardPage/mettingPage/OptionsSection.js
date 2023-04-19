import React from "react";

// components
import { Box, Button } from "@mui/material";
import { Add, CalendarToday } from "@mui/icons-material";
import { Calendar } from "react-modern-calendar-datepicker/lib/Calendar";
import DateModal from "../../common/DateModal";
import MeetingModal from "./modal/MeetingModal";
import Title from "components/common/Title";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setMeetingDate } from "redux/data/actions";

const classNames = {
    section: "xl:sticky xl:top-6 w-full h-fit xl:basis-1/3 sm:py-3 sm:px-5 rounded-2xl xl:bg-white xl:shadow-lg",
    title: "xl:after:w-full xl:before:w-full",
    calendar: "hidden xl:flex shadow-none mx-auto",
    buttonsContainer: "flex flex-wrap items-center gap-2 mt-3",
    button: "w-full sm:w-fit xl:w-full rounded-3xl last:xl:hidden",
};

const OptionsSection = () => {
    const { currentMeetingDate } = useSelector((state) => state.dataState);
    const dispatch = useDispatch();

    return (
        <section className={classNames.section}>
            <Title title="Options" className={classNames.title} />

            <Calendar
                calendarClassName={classNames.calendar}
                shouldHighlightWeekends
                colorPrimary="#362FD9"
                value={currentMeetingDate}
                onChange={(value) => dispatch(setMeetingDate(value))}
            />

            <Box className={classNames.buttonsContainer}>
                <MeetingModal
                    ModalButton={
                        <Button variant="outlined" className={classNames.button} endIcon={<Add />}> 
                            Create Meeting 
                        </Button>
                    }
                />
                <DateModal
                    mode="meeting"
                    ModalButton={
                        <Button variant="outlined" className={classNames.button} endIcon={<CalendarToday />}> 
                            Change Date 
                        </Button>
                    }
                />
            </Box>
        </section>
    );
};

export default OptionsSection;
