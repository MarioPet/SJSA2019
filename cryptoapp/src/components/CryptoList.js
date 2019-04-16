import React from "react";
import { connect } from "react-redux"; 

import { FetchCurrencies } from "../actions/CurrencyActions";

export class CryptoList extends React.Component {

    componentDidMount() {
        this.props.FetchCurrencies();
    }

    render() {
        return (
            <div id="crypto-list">
                <select>
                    {
                        this.props.currencies.map((c, i) => {
                            return (
                                <option key={i} value={c}>{c}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.CurrencyReducer.currencies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchCurrencies: () => {
            dispatch(FetchCurrencies());
        }
    }
}

CryptoList = connect(mapStateToProps, mapDispatchToProps)(CryptoList);