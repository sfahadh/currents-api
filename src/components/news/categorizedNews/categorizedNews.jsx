import React, { Component } from 'react';
import Articles from '../articles';

const URL = "https://api.currentsapi.services/v1/latest-news?category=";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class categorizedNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const resp = await fetch(`${URL}${this.props.category}&apiKey=${API_KEY}`)
        const json = await resp.json();
        this.setState({ data: json });
    }

    render() {
        return (
            <>
                <h1>{this.props.category}</h1>
                <hr />
                <Articles news={this.state.data.news} />
            </>
        )
    }
}

export default categorizedNews;