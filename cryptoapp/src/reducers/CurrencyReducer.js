const initialState = {
    currencies: []
}

const CurrencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CURRENCIES" :
            return {
                ...state,
                currencies: action.payload
            }
        default: return state;
    }
}

export default CurrencyReducer;