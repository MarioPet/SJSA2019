const initialState = {
    user: {},
    fetching: false,
    error: null
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_START":
            return {
                ...state,
                fetching: true
            }
        case "FETCH_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                fetching: false
            }
        case "FETCH_USER_ERROR":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default: return state;
    }
}

export default UsersReducer;