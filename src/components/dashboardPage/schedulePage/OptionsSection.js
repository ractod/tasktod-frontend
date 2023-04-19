import React from "react";

// components
import { Add, AllInclusive, Assignment, Bed, CalendarToday, CheckCircle, Close, Search } from "@mui/icons-material";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import TaskModal from "./modal&menu/TaskModal";
import DateModal from "../../common/DateModal";
import OptionsMenu from "./modal&menu/OptionsMenu";
import FilterInput from "components/common/FilterInput";

const classNames = {
    section: "flex flex-wrap items-center gap-2",
    inputsContainer: "flex basis-full md:basis-auto flex-nowrap gap-2",
    searchInput: "basis-full md:basis-auto bg-white",
    searchButton: "text-primary",
    filterInput: "hidden md:block w-[200px] bg-white",
    filterItemIcon: (textColor) => textColor,
    modalsContainer: "flex gap-x-2",
    modalButton: "hidden md:inline-flex h-[56px]",
};

const SearchInputAdornment = () => (
    <InputAdornment position="start">
        <IconButton className={classNames.searchButton}>
            <Search />
        </IconButton>
    </InputAdornment>
)

const OptionsSection = ({tasksFilters, setFilters}) => {
    return (
        <section className={classNames.section}>
            
            {/* filters input */}
            <Box className={classNames.inputsContainer}>
                <TextField
                    InputProps={{ placeholder: "Search Name...", startAdornment: <SearchInputAdornment /> }} 
                    className={classNames.searchInput}
                    name="name"
                    value={tasksFilters.name}
                    onChange={setFilters}
                />

                <FilterInput value={tasksFilters.tag} onChange={setFilters} className={classNames.filterInput} />
                <OptionsMenu {...{tasksFilters, setFilters}} />
            </Box>

            <Box className={classNames.modalsContainer}>
                <TaskModal
                    ModalButton={
                        <Button variant="contained" className={classNames.modalButton} endIcon={<Add />}> 
                            Create Task 
                        </Button>
                    }
                />
                <DateModal
                    mode="task"
                    ModalButton={
                        <Button variant="contained" className={classNames.modalButton} endIcon={<CalendarToday />}> 
                            Change Date 
                        </Button>
                    }
                />
            </Box>
        </section>
    );
};

export default OptionsSection;
