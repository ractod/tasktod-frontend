import React, { useState } from 'react';

// components
import { Alert, AlertTitle, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { deleteMeeting, deleteTask } from 'redux/data/actions';

const classNames = {
    dialog: "mx-3 w-full sm:w-fit",
    header: "flex items-center justify-between p-4 sm:px-6",
    title: "p-0 font-bold text-primary text-base md:text-[17px] lg:text-xl",
    alertTitle: "text-sm md:text-[15px] lg:text-base"
}

const DeleteModal = ({ ModalButton, mode, itemId }) => {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.dataState)

    const [isOpen, setIsOpen] = useState(false)

    const submitHandler = () => {
        dispatch(
            mode == "task" 
            ? deleteTask(itemId, () => setIsOpen(false))
            : deleteMeeting(itemId, () => setIsOpen(false))
        )
    }

    return (
        <>
            {/* rendering optional button with jsx format from parent component */}
            <ModalButton.type {...ModalButton.props} onClick={() => setIsOpen(true)}>
                { ModalButton.props.children }
            </ModalButton.type>

            <Dialog PaperProps={{ className: classNames.dialog }} open={isOpen} onClose={() => setIsOpen(false)}>

                <Box className={classNames.header}>
                    <DialogTitle className={classNames.title}> Delete { mode == "task" ? "Task" : "Meeting" } </DialogTitle>
                    <IconButton onClick={() => setIsOpen(false)}> <Close /> </IconButton>
                </Box>

                <DialogContent>
                    <Alert severity='warning'>
                        <AlertTitle className={classNames.alertTitle}> 
                            Are You Sure You Want To Delete This { mode == "task" ? "Task" : "Meeting" } 
                        </AlertTitle>
                    </Alert>
                </DialogContent>

                <DialogActions>
                    <Button variant="outlined" fullWidth onClick={() => setIsOpen(false)}> Cancel </Button>
                    <LoadingButton loading={loading} variant='contained' fullWidth onClick={submitHandler}>
                        Delete
                    </LoadingButton>
                </DialogActions>

            </Dialog>
        </>
    );
}

export default DeleteModal;
