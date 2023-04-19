const initialState = { user: null, loading: true, error: false }

function authReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_USER_LOADING": return { ...state, loading: true, error: false }
        case "FETCH_USER_FAILURE": return { ...state, loading: false, error: true }
        case "FETCH_USER_SUCCESS": return { user: action.payload.userData, loading: false, error: false }
        
        default: return state
    }
}

export default authReducer