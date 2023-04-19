import React, { useState } from "react";

// components
import {
    Box,
    Drawer,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Typography,
    Button,
} from "@mui/material";
import { Add, CalendarToday, Close, Settings } from "@mui/icons-material";
import TaskModal from "./TaskModal";
import DateModal from "../../../common/DateModal";
import FilterInput from "components/common/FilterInput";

const classNames = {
    optionsButton: "md:hidden h-[56px]",
    drawer: "h-[60vh] py-2 px-4",
    header: "flex items-center justify-between",
    title: "font-bold text-primary text-lg md:text-[19px] lg:text-xl",
    closeIcon: "text-primary",
    content: "mt-3",
    filterInput: "w-full",
    buttonsContainer: "flex gap-x-2 mt-2",
    modalButton: "h-[56px] w-full",
};

const OptionsMenu = ({tasksFilters, setFilters}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <Button 
                size="large" variant="contained" endIcon={<Settings />} 
                className={classNames.optionsButton} onClick={openMenu}
            >
                Options
            </Button>

            <Drawer open={isOpen} onClose={closeMenu} anchor="bottom" PaperProps={{ className: classNames.drawer }} >
                {/* header */}
                <Box className={classNames.header}>
                    <Typography className={classNames.title}> Options </Typography>
                    <IconButton onClick={closeMenu}> <Close className={classNames.closeIcon} /> </IconButton>
                </Box>

                <Box className={classNames.content}>
                    <FilterInput value={tasksFilters.tag} onChange={setFilters} className={classNames.filterInput} />

                    <Box className={classNames.buttonsContainer}>
                        <TaskModal
                            ModalButton={
                                <Button variant="outlined" className={classNames.modalButton} endIcon={<Add />}> 
                                    Create Task 
                                </Button>
                            }
                        />
                        <DateModal
                            mode="task"
                            ModalButton={
                                <Button variant="outlined" className={classNames.modalButton} endIcon={<CalendarToday />}> 
                                    Change Date
                                </Button>
                            }
                        />
                    </Box>
                </Box>

            </Drawer>
        </>
    );
};

export default OptionsMenu;
