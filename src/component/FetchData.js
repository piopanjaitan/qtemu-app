import React, { Component } from "react";
import axios from "axios";

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }
    componentDidMount() {
        axios.get("https://swapi.dev/api/people/").then(response => {
        this.setState({
            people: response.data.results
        })
            })
    }

    render() {

        return (
        <div>
            <h1> Fetching data....</h1>
            
        <ul>
            
            {this.state.people.map(p => <li>{p.name}</li>)}

        </ul>

        
        </div>
        );
    }
}

