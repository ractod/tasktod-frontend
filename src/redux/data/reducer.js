import { generateTodayDate } from "utilities/functions";

const initalState = {
    currentTaskDate: generateTodayDate(),
    currentMeetingDate: generateTodayDate(),
    tasks: [],
    meetings: [],
    loading: false,
};

function dataReducer(state = initalState, action) {
    switch (action.type) {
        case "FETCH_DATA_LOADING":
            return { ...state, loading: true };
        case "FETCH_DATA_FAILURE":
            return { ...state, loading: false };
        case "FETCH_DATA_SUCCESS":
            return { ...state, loading: false };
        case "SET_TASKS":
            return { ...state, tasks: action.payload.tasks };
        case "SET_MEETINGS":
            return { ...state, meetings: action.payload.meetings };
        case "SET_TASK_DATE":
            return { ...state, currentTaskDate: action.payload.date };
        case "SET_MEETING_DATE":
            return { ...state, currentMeetingDate: action.payload.date };
        default:
            return state;
    }
}

export default dataReducer;
