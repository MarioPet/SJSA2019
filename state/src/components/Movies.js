import React from "react";

export class Movies extends React.Component {
    render(){
        // console.log("PROPERTIES [PROPS] OF ENTIRE COMPONENT", this.props);
        // console.log("SINGLE PROPERTY [PROPS] OF COMPONENT", this.props.data);
        return(
            <div className="movie-list">
                <ol>
                    {
                        this.props.data.map((movie, i) => {
                            return (
                                <li key={i}>{movie}</li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}