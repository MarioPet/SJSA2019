const initialState = {
    currencies: [],
    selectedCurrency: null,
    exchangeData: {}
}

const CurrencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_CURRENCIES" :
            return {
                ...state,
                currencies: action.payload
            }
        case "SELECT_CURRENCY" :
            return {
                ...state,
                selectedCurrency: action.payload
            }
        case "FETCH_EXCHANGE_DATA" :
            return {
                ...state,
                exchangeData: action.payload
            }
        case "FETCH_EXCHANGE_DATA_ERROR" :
            return {
                ...state,
                exchangeData: {}
            }
        default: return state;
    }
}

export default CurrencyReducer;