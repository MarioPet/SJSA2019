import React from "react";
import { connect } from "react-redux"; 

import { FetchCurrencies, SelectCurrency, FetchExchange } from "../actions/CurrencyActions";

export class CryptoList extends React.Component {

    constructor(props) {
        super(props);

        this.HandleSelectChange = this.HandleSelectChange.bind(this);
    }

    componentDidMount() {
        this.props.FetchCurrencies();
    }

    HandleSelectChange(e) {
        this.props.SelectCurrency(e.target.value);
        this.props.FetchExchange(e.target.value);
    }

    isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }

    render() {

        const ExchangeData = () => {
            return (
                <div className="exchange-data">
                    <h2> 
                        <span>{this.props.selectedCurrency}</span>
                        /
                        <span>USD</span>
                    </h2>

                    <h4>Rate: {this.props.exchangeData.rate}</h4>
                    <h4>Time: {this.props.exchangeData.time.toLocaleString()}</h4>
                </div>
            )
        }

        return (
            <div id="crypto-list">
                <div className="crypto-container">
                    <select onChange={this.HandleSelectChange}>
                        <option defaultValue>Select Currency</option>
                        {
                            this.props.currencies.map((c, i) => {
                                return (
                                    <option key={i} value={c}>{c}</option>
                                )
                            })
                        }
                    </select>

                    {
                        this.props.selectedCurrency !== null && 
                        !this.isEmpty(this.props.exchangeData)

                        ?

                        console.log(this.props)

                        :

                        <h2>Your data will appear here.</h2>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.CurrencyReducer.currencies,
        selectedCurrency: state.CurrencyReducer.selectedCurrency,
        exchangeData: state.CurrencyReducer.exchangeData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchCurrencies: () => {
            dispatch(FetchCurrencies());
        },
        SelectCurrency: (currency) => {
            dispatch(SelectCurrency(currency))
        },
        FetchExchange: (selectedCurrency) => {
            dispatch(FetchExchange(selectedCurrency));
        }
    }
}

CryptoList = connect(mapStateToProps, mapDispatchToProps)(CryptoList);