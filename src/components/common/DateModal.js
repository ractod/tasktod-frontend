import React, { useState } from "react";

// components
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@mui/material";
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { CalendarToday, Close } from "@mui/icons-material";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setTaskDate, setMeetingDate } from "redux/data/actions";

const classNames = {
    dialog: "mx-3 w-full sm:w-[450px]",
    header: "flex items-center justify-between p-4 sm:px-6",
    title: "p-0 font-bold text-primary text-base md:text-[17px] lg:text-xl",
    content: "pb-0",
    // calendar's font size must be given with px and the library
    // increases the given fontsize automatic
    calendar: "shadow-none mx-auto text-[7px] md:text-[10px]",
};

const DateModal = ({ mode, ModalButton }) => {
    
    const dispatch = useDispatch();
    const { currentMeetingDate, currentTaskDate } = useSelector( (state) => state.dataState );

    const [isOpen, setIsOpen] = useState(false);

    // component is used for changing task date and also meeting Date
    const changeHandler = (value) => {
        mode == "meeting"
        ? dispatch(setMeetingDate(value))
        : dispatch(setTaskDate(value));
    };

    return (
        <>
            {/* rendering optional button with jsx format from parent component */}
            <ModalButton.type {...ModalButton.props} onClick={() => setIsOpen(true)}> 
                { ModalButton.props.children }
            </ModalButton.type>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} PaperProps={{ className: classNames.dialog }} >

                <Box className={classNames.header}>
                    <DialogTitle className={classNames.title}> Change The Date </DialogTitle>
                    <IconButton onClick={() => setIsOpen(false)}> <Close /> </IconButton>
                </Box>

                <DialogContent className={classNames.content}>
                    <Calendar
                        calendarClassName={classNames.calendar}
                        shouldHighlightWeekends
                        colorPrimary="#362FD9"
                        value={ mode == "meeting" ? currentMeetingDate : currentTaskDate }
                        onChange={changeHandler}
                    />
                </DialogContent>

            </Dialog>
        </>
    );
};

export default DateModal;
