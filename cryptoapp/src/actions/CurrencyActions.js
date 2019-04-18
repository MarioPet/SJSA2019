export const FetchCurrencies = () => {
    return {
        type: "FETCH_CURRENCIES",
        payload: ["BTC", "ETH", "LTC", "XRP"]
    }
}

export const SelectCurrency = (currency) => {
    return {
        type: "SELECT_CURRENCY",
        payload: currency
    }
}

export const FetchExchangeDataStart = (data) => {
    return {
        type: "FETCH_EXCHANGE_DATA",
        payload: data
    }
}

export const FetchExchangeDataError = () => {
    return {
        type: "FETCH_EXCHANGE_DATA_ERROR",
    }
}

export function FetchExchange(selectedCurrency) {
    return dispatch => {
        fetch("https://rest.coinapi.io/v1/exchangerate/" + selectedCurrency + "/USD/?apikey=789DAD89-DFF6-4BB7-B1F4-B839D0B17DC8")
            .then((res) => { return res.json() })
            .then((res) => dispatch(FetchExchangeDataStart(res)) )
            .catch((err) => dispatch(FetchExchangeDataError()));
    }
}