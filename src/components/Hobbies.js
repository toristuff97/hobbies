import React, {Component} from 'react';

class Hobbies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbyName: "Roller",
            description: "",
            image: ""
        }
    }


    render() {

        const skate = {hobbyName: "Rollerskating", description: "Rollerskating is the act of riding around on shoes with 4 wheels on each shoe and doing tricks and dances"}
        return (
            <div>
            <div className="title">
                <h2>My favorite hobby is Rollerskating.</h2>
            </div>

            <div className="skating">
                <h3>Hobby Name:</h3>
                <h3>Image:</h3>
                <h3>Hobby Description:</h3>
            </div>

            <div className="cooking">
                <h3>Hobby Name:</h3>
                <h3>Image:</h3>
                <h3>Hobby Description:</h3>
            </div>

            <div className="gaming">
                <h3>Hobby Name:</h3>
                <h3>Image:</h3>
                <h3>Hobby Description:</h3>
            </div>
        </div>
        )
    }
}

export default Hobbies;