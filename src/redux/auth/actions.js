import axios from "axios"
import { toast } from "react-toastify"
import { setMeetings, setTasks } from "redux/data/actions"
import store from "redux/store"

const fetchUserLoading = () => ({ type: "FETCH_USER_LOADING" })
const fetchUserFailure = () => ({ type: "FETCH_USER_FAILURE" })
const fetchUserSuccess = (userData) => ({ 
    type: "FETCH_USER_SUCCESS",
    payload: { userData }
})

const login = (values) => async (dispatch) => {
    dispatch(fetchUserLoading())

    try {
        const { data } = await axios.post("/user/login", values)

        toast.success(data.message)
        dispatch(fetchUserSuccess(data.user))
        dispatch(setMeetings(data.user.meetings))
        dispatch(setTasks(data.user.tasks))
        window.location.pathname = "/dashboard/schedule"
    }
    catch(error) {
        toast.error(error?.response?.data?.message || "Filed To Connect To The Server")
        dispatch(fetchUserFailure())
    }

       
}

const register = (values) => async (dispatch) => {
    dispatch(fetchUserLoading())

    try {
        const { data } = await axios.post("/user/register", values)

        toast.success(data.message)
        dispatch(fetchUserSuccess(data.user))
        dispatch(setMeetings(data.user.meetings))
        dispatch(setTasks(data.user.tasks))
        window.location.pathname = "/dashboard/schedule"
    }
    catch(error) {
        toast.error(error?.response?.data?.message || "Filed To Connect To The Server")
        dispatch(fetchUserFailure())
    }
}

const loadUser = async () => {
    // I'm using store because load user is used in App.js and we 
    // don't have access to dispatch there
    
    try {
        const { data } = await axios.get("/user/load") 
        store.dispatch(fetchUserSuccess(data.user))
        if(data.user) {
            store.dispatch(setMeetings(data.user.meetings))
            store.dispatch(setTasks(data.user.tasks))
        }
    } 
    catch(error) { 
        console.log("test3")

        store.dispatch(fetchUserFailure())
     }
}

const logout = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/user/logout")
            
        toast.success(data.message)
        dispatch(fetchUserSuccess(null))
        window.location.pathname = "/auth/login"
    }
    catch(error) {
        toast.error(error?.response?.data?.message || "Filed To Connect To The Server Ours")
    }
}

export { register, loadUser, logout, login }