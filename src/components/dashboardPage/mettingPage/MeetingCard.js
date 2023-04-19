import React from 'react';

// components
import { Cancel, CheckCircle, Delete, HistoryToggleOff, ModeEdit} from '@mui/icons-material';
import { Card, Typography, Box, IconButton, Zoom } from '@mui/material';
import Tag from 'components/common/Tag';

// utilities
import { convertTime } from 'utilities/functions';
import MeetingModal from './modal/MeetingModal';
import DeleteModal from 'components/common/DeleteModal';

// redux
import { useDispatch } from 'react-redux';
import { completeMeeting } from 'redux/data/actions';

const classNames = {
    card: "mt-3 first:mt-0 py-3 px-5 rounded-xl border-l-4 border-l-primary shadow-md",
    meetingName: "truncate font-bold text-black text-[15px] md:text-base lg:text-[17px]",
    description: "max-w-[90%] mt-1 truncate font-medium text-mute text-[13px] md:text-sm lg:text-[15px]",
    cardFooter: "flex items-center justify-between mt-1",
    timeContainer: "max-w-[55%] flex items-center gap-x-2 text-mute",
    timeIcon: "text-xl md:text-2xl",
    time: "block truncate text-right text-sm md:text-[15px] lg:text-base",
    buttonsContainer: "flex items-center gap-x-2",
    editIcon: "text-xl md:text-2xl",
    tagsContainer: "flex items-center gap-x-2 mt-3 overflow-auto",
}

const MeetingCard = ({ data: { name, description, startTime, endTime, tags, _id } }) => {

    const dispatch = useDispatch()

    return (
        <Zoom in>
            <Card className={classNames.card}>

                <Typography className={classNames.meetingName}> { name } </Typography>
                <Typography className={classNames.description}> { description } </Typography>

                <Box className={classNames.cardFooter}>
                    <Box className={classNames.timeContainer}>
                        <HistoryToggleOff className={classNames.timeIcon} />
                        <Typography component="span" className={classNames.time}>
                            { convertTime(startTime) } - { convertTime(endTime) }
                        </Typography>
                    </Box>
                    
                    <Box className={classNames.buttonsContainer}>
                        <MeetingModal
                            mode="update"
                            data={{ startTime, endTime, name, description, tag: tags[0] }}
                            meetingId={_id}
                            ModalButton={
                                <IconButton color="purple"> 
                                    <ModeEdit color="inherit" className={classNames.optionButton} /> 
                                </IconButton>
                            }
                        />
                        <DeleteModal 
                            mode="meeting"
                            itemId={_id}
                            ModalButton={
                                <IconButton color="purple"> 
                                    <Delete color="inherit" className={classNames.optionButton} /> 
                                </IconButton>
                            }
                        />
                        <IconButton color="purple" onClick={() => dispatch(completeMeeting(_id))}> 
                            {
                                tags.includes("completed")
                                ?  <Cancel color="inherit" className={classNames.optionButton} />  
                                :  <CheckCircle color="inherit" className={classNames.optionButton} /> 
                            }
                        </IconButton>
                    </Box>
                </Box>

                <Box className={classNames.tagsContainer}>
                   { tags.map(tag => <Tag type={tag} key={tag} />) }
                </Box>
            </Card>
        </Zoom>
    );
}

export default MeetingCard;
