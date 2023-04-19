import React, { useEffect, useState } from 'react';

// components
import { Box,Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import Tag from 'components/common/Tag';
import FormNotification from 'components/common/formNotification';
import { toast } from 'react-toastify';

// utilities
import { validateCreateForm } from 'utilities/functions';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { createTask, updateTask } from 'redux/data/actions';

const classNames = {
    dialog: "mx-3 w-full sm:w-[450px]",
    title: "px-4 sm:px-6 font-bold text-primary text-base md:text-[17px] lg:text-xl",
    form: "flex flex-col",
    dialogContent: "my-5 px-4 sm:px-6 overflow-visible",
    timesContainer: "flex items-start gap-x-2 mt-7",
    timeInputContainer: "basis-1/2",
    typeText: "mt-7 text-mute font-medium text-sm md:text-[15px] lg:text-base",
    tagsContainer: "flex items-center gap-x-2 mt-2",
}

const initialValues = { name: "", startTime: "", endTime: "", tag: "activity" }

// this component is used to create and update the task and 
// to recognize that  we use mode props
const TaskModal = ({ ModalButton, mode, data, taskId }) => {
    
    // redux
    const dispatch = useDispatch()
    const { loading, currentTaskDate } = useSelector(state => state.dataState)

    // states
    const [isOpen, setIsOpen] = useState(false)
    const [values, setValues] = useState(mode == 'update' ? data : initialValues)
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})

    // functions
    const closeHandler = () => {
        setIsOpen(false)
        resetStates() 
    }
    const resetStates = () => {
        setValues(mode == 'update' ? data : initialValues)
        setTouched({})
        setErrors({})
    }
    const submitHandler = (event) => {
        event.preventDefault()

        Object.keys(errors).length ? 
        toast.error("Fill The Form Correctly") :
        dispatch(
            mode == "update" 
            ? updateTask({...values, date: currentTaskDate}, taskId , closeHandler) 
            : createTask({...values, date: currentTaskDate}, closeHandler)
        )
    }

    // common input props
    const generateProps = (name) => ({ 
        name, 
        fullWidth: true,
        value: values[name], 
        className: classNames.textFiled,
        InputLabelProps: { shrink: true},
        error: !!errors[name] && touched[name], 
        onBlur: () => setTouched(prevState => ({...prevState, [name]: true})), 
        onChange: (event) => setValues(prevState => ({...prevState, [name]: event.target.value})), 
    })

    useEffect(() => {
        setErrors(validateCreateForm(values))
    }, [values, touched])

    return (
        <>
            {/* rendering optional button with jsx format from parent component */}
            <ModalButton.type {...ModalButton.props} onClick={() => setIsOpen(true)}> 
                { ModalButton.props.children }
            </ModalButton.type>

            <Dialog PaperProps={{ className: classNames.dialog }} open={isOpen} onClose={closeHandler}>

                <DialogTitle className={classNames.title}> { mode == "update" ? "Update": "Create" } Task </DialogTitle>

                <DialogContent className={classNames.dialogContent}>
                    <form className={classNames.form} onSubmit={submitHandler}>

                        {/* name input */}
                        <TextField {...generateProps("name")} label="Name" />
                        { errors.name && touched.name && <FormNotification text={errors.name} /> }

                        {/* times input */}
                        <Box className={classNames.timesContainer}>
                            <Box className={classNames.timeInputContainer}>
                                <TextField {...generateProps("startTime")} type="time" label="Start Time"  />
                                { errors.startTime && touched.startTime && <FormNotification text={errors.startTime} /> }
                            </Box>
                            <Box className={classNames.timeInputContainer}>
                                <TextField {...generateProps("endTime")} type="time" label="End Time"  />
                                { errors.endTime && touched.endTime && <FormNotification text={errors.endTime} /> }
                            </Box>
                        </Box>
                        { errors.times && touched.endTime && touched.startTime && <FormNotification text={errors.times} /> }


                        {/* tags */}
                        <Box>
                            <Typography className={classNames.typeText}> Type Of Task: </Typography> 
                            <Box className={classNames.tagsContainer}>
                                <Tag 
                                    onClick={() => setValues(prevState => ({...prevState, tag: "activity"}))} 
                                    active={values.tag == "activity"} 
                                    type="activity"
                                /> 
                                <Tag 
                                    onClick={() => setValues(prevState => ({...prevState, tag: "resting"}))} 
                                    active={values.tag == "resting"} 
                                    type="resting"
                                />
                            </Box>
                        </Box>
                    </form>
                </DialogContent>

                <DialogActions>
                    <Button variant='outlined' fullWidth onClick={closeHandler}> cancel </Button>
                    <LoadingButton loading={loading} variant="contained" fullWidth onClick={submitHandler}> 
                        { mode == "update" ? "Update": "Create" } 
                    </LoadingButton>
                </DialogActions>

            </Dialog>
        </>
    );
}

export default TaskModal;
