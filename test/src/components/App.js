import React from "react";
import { Hello } from "./Hello";
import { Header } from "./Header";
import { Vacancy } from "./Vacancy";
import { Comment } from "./Comment";

export class App extends React.Component {
    render() {

        let hotel = {
            name: "The El Royale",
            roomNO: 342,
            hasVacancy: false
        }

        let commentData = {
            comment: "Lorem ipsum dolor sit amet...",
            date: "Fri, Mar 22 2019"
        }

        let userData = {
            firstName: "Mario",
            lastName: "Petkovski",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6W69wLdFUOceh8wMJ64Y1sC5OwFs1CKYleHKd08UVTuEU9sv"
        }

        return (
            <div>
                <Header />
                <Hello 
                    name="Mario"
                    age="25"
                />
                <Hello 
                    name="Pero"
                    age={55}
                />
                <Vacancy hotel={hotel} />

                <br /> <br /> <hr /> 

                <Comment data={commentData} user={userData} />
            </div>
        )
    }
}