const initialState = {
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NEW_USER" :
            return {
                ...state,
                users: Object.assign({}, state, {
                    users: action.payload
                })
            }
        default: return state;
    }
}

export default rootReducer;