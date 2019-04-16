export const FetchCurrencies = () => {
    return {
        type: "FETCH_CURRENCIES",
        payload: ["BTC", "ETH", "LTC", "XRP"]
    }
}