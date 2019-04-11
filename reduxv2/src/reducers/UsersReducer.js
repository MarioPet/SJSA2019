const initialState = {
    users: []
}

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS" :
            return {
                ...state,
                users: action.payload
            }
        case "ADD_NEW_USER" :
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }
        default: return state;
    }
}

export default UsersReducer;