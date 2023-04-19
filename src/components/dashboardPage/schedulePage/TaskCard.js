import React from 'react';

// components
import { Card, IconButton, Typography,Box, Zoom } from '@mui/material';
import { Cancel, CheckCircle, Delete, HistoryToggleOff, ModeEdit } from '@mui/icons-material';
import Tag from 'components/common/Tag';

// utilities
import { convertTime } from 'utilities/functions';
import TaskModal from './modal&menu/TaskModal';
import DeleteModal from 'components/common/DeleteModal';

// redux
import { useDispatch } from 'react-redux';
import { completeTask } from 'redux/data/actions';

const classNames = {
    card: "px-5 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-3 shadow-md first:mt-0 border-l-4 border-l-primary rounded-xl",
    leftContent: "flex flex-col gap-4 sm:basis-full",
    taskName: "sm:max-w-[70%] font-bold text-black truncate text-base md:text-[17px] lg:text-lg",
    tagsContainer: "flex items-center gap-x-2 overflow-auto",
    rightContent: "flex justify-between sm:flex-col sm:items-end gap-4",
    timeContainer: "max-w-[55%] sm:max-w-fit flex items-center gap-x-2 text-mute",
    timeIcon: "text-xl md:text-2xl",
    time: "block truncate text-right text-sm md:text-[15px] lg:text-base",
    buttonsContainer: "flex items-center gap-x-2",
    optionButton: "text-xl md:text-2xl",
}

const TaskCard = ({ data: { name, startTime, endTime, tags, _id } }) => {

    const dispatch = useDispatch()

    return (
        <Zoom in>
            <Card className={classNames.card}>

                {/* left content */}
                <Box className={classNames.leftContent}>
                    <Typography component="span" className={classNames.taskName}> { name } </Typography>
                    <Box className={classNames.tagsContainer}>
                        { tags.map(tag => <Tag type={tag} key={tag} />) }
                    </Box>
                </Box>

                {/* right content */}
                <Box className={classNames.rightContent}>

                    <Box className={classNames.timeContainer}>
                        <HistoryToggleOff className={classNames.timeIcon} />
                        <Typography component="span" className={classNames.time}>
                            { convertTime(startTime) } - { convertTime(endTime) }
                        </Typography>
                    </Box>

                    <Box className={classNames.buttonsContainer}>
                        <TaskModal
                            mode="update"
                            data={{ startTime, endTime, name, tag: tags[0] }}
                            taskId={_id}
                            ModalButton={
                                <IconButton color="purple"> 
                                    <ModeEdit color="inherit" className={classNames.optionButton} /> 
                                </IconButton>
                            }
                        />
                        <DeleteModal 
                            mode="task"
                            itemId={_id}
                            ModalButton={
                                <IconButton color="purple"> 
                                    <Delete color="inherit" className={classNames.optionButton} /> 
                                </IconButton>
                            }
                        />
                        <IconButton color="purple" onClick={() => dispatch(completeTask(_id))}> 
                            {
                                tags.includes("completed")
                                ?  <Cancel color="inherit" className={classNames.optionButton} />  
                                :  <CheckCircle color="inherit" className={classNames.optionButton} /> 
                            }
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </Zoom>
    );
}

export default TaskCard;
