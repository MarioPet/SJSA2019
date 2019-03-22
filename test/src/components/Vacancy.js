import React from "react";

export class Vacancy extends React.Component {
    render() {
        return (
            <div>
               <h2>Welcome to {this.props.hotel.name}</h2>
               {
                   this.props.hotel.hasVacancy

                   ?

                   <p>Room Number {this.props.hotel.roomNO} has vancacy. Welcome!</p>

                   :

                   <p>Room Number {this.props.hotel.roomNO} is not available. Sorry!</p>
               }
            </div>
        )
    }
}