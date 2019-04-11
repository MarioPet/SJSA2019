export const FetchUsers = () => {
    return {
        type: "FETCH_USERS",
        payload: [
            {user: "Mario Petkovski", id: 1, active: true},
            {user: "Quentin Tarantino", id: 2, active: true}
        ]
    }
}

export const AddNewUser = (user) => {
    return {
        type: "ADD_NEW_USER",
        payload: user
    }
}