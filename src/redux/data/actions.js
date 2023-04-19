import axios from "axios"
import { toast } from "react-toastify"

const fetchDataLoading = () => ({ type: "FETCH_DATA_LOADING" })
const fetchDataFailure = () => ({ type: "FETCH_DATA_FAILURE" })
const fetchDataSuccess = () => ({ type: "FETCH_DATA_SUCCESS", })


const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: { tasks }
})

const setMeetings = (meetings) => ({
    type: "SET_MEETINGS",
    payload: { meetings }
})

const setMeetingDate = (date) => ({
    type: "SET_MEETING_DATE",
    payload: { date }
})

const setTaskDate = (date) => ({
    type: "SET_TASK_DATE",
    payload: { date }
})

const createTask = (values, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.post("/tasks", values)
 
        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setTasks(data.tasks))
        // close the modal
        closeHandler()
    }
    catch(error) {
        toast.error(error?.response?.data?.message || "Filed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
    
}

const updateTask = (values, taskId, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())
    
    try{
        const { data } = await axios.put(`/tasks/update/${taskId}`, values)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setTasks(data.tasks))
        // close the modal
        closeHandler()
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}

const completeTask = (taskId) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.put(`/tasks/${taskId}`)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setTasks(data.tasks))
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}

const deleteTask = (taskId, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.delete(`/tasks/${taskId}`)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setTasks(data.tasks))
        // close the modal
        closeHandler()
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}

const createMeeting = (values, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.post("/meetings", values)
 
        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setMeetings(data.meetings))
        // close the modal
        closeHandler()
    }
    catch(error) {
        toast.error(error?.response?.data?.message || "Filed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
    
}

const updateMeeting = (values, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())
    
    try{
        const { data } = await axios.put("/meetings/update", values)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setMeetings(data.meetings))
        // close the modal
        closeHandler()
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}


const completeMeeting = (meetingId) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.put(`/meetings/${meetingId}`)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setMeetings(data.meetings))
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}

const deleteMeeting = (meetingId, closeHandler) => async (dispatch) => {
    dispatch(fetchDataLoading())

    try {
        const { data } = await axios.delete(`/meetings/${meetingId}`)

        toast.success(data.message)
        dispatch(fetchDataSuccess())
        dispatch(setMeetings(data.meetings))
        // close the modal
        closeHandler()
    } 
    catch(error) {
        toast.error(error?.response?.data?.message || "Failed To Connect To The Server Ours")
        dispatch(fetchDataFailure())
    }
}



export { 
    setTasks, 
    setMeetings, 
    setMeetingDate, 
    setTaskDate, 
    createMeeting, 
    createTask,
    updateTask,
    updateMeeting,
    deleteTask,
    deleteMeeting,
    completeTask,
    completeMeeting
}