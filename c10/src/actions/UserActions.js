export const FetchUserStart = () => {
    return {
        type: "FETCH_USER_START"
    }
};

export const FetchUserError = (error) => {
    return {
        type: "FETCH_USER_ERROR",
        payload: error
    }
};

export const FetchUserSuccess = (user) => {
    return {
        type: "FETCH_USER_SUCCESS",
        payload: user
    }
}

export function FetchUser() {
    return dispatch => {
        dispatch(FetchUserStart());

        fetch("https://jsonplaceholder.typicode.com/users/2")
            .then((res) => { return res.json(); })
            .then(res => dispatch(FetchUserSuccess(res)))
            .catch(err => dispatch(FetchUserError(err)));
    }
}